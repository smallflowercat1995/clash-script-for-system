function DownloadsInterceptManager()
{
    this.enable = false;
    this.returnDownloads = [];
    this.requestsHeaders = new Map;
    this.lastDownload = false;
    this.isInitialize = false;
}

DownloadsInterceptManager.prototype.initialize = function()
{
    if(!this.isInitialize)
    {
        this.isInitialize = true;
        browser.webRequest.onBeforeSendHeaders.addListener(
            this.onBeforeSendHeaders.bind(this),
            { urls: ["<all_urls>"] },
            ["requestHeaders", "blocking"]);
        browser.webRequest.onBeforeRequest.addListener(
            this.onBeforeRequest.bind(this),
            { urls: ["<all_urls>"] },
            ["requestBody"]);
        browser.webRequest.onSendHeaders.addListener(
            this.onSendHeaders.bind(this),
            { urls: ["<all_urls>"] },
            ["requestHeaders"]);
        browser.webRequest.onHeadersReceived.addListener(
            this.onHeadersReceived.bind(this),
            { urls: ["<all_urls>"] },
            ["blocking", "responseHeaders"]);
    }
};

DownloadsInterceptManager.prototype.returnDownloadIndexByOriginalUrl = function(url)
{
    for (var i = 0; i < this.returnDownloads.length; ++i) {
        if (this.returnDownloads[i].originalUrl == url)
            return i;
    }
    return -1;
};


DownloadsInterceptManager.prototype.returnDownload = function(downloadInfo, details)
{
    downloadInfo.refCount = downloadInfo.httpPostData ? 2 : 1;
    this.returnDownloads.push(downloadInfo);

    var info = {};
    info.url = downloadInfo.originalUrl;
    if (downloadInfo.httpPostData && downloadInfo.httpPostData != "") {
        info.method = "POST";
        info.body = downloadInfo.httpPostData;
    }

    info.saveAs = true;

    if (details && details.responseHeadersMap && typeof details.responseHeadersMap.has === 'function'
        && details.responseHeadersMap.has("content-disposition")) {
        var disposition = details.responseHeadersMap.get("content-disposition");
        var fileName = xdmExtUtils.getNameByDisposition(disposition);
        if(fileName) {
            info.filename = fileName;
        }
    }
    browser.downloads.download(info,
        function (downloadId) {
            if (!downloadId) {
                alert(browser.i18n.getMessage("addingAfterCancelFailed"));
            } else {
                var returnDownloadIndex = this.returnDownloadIndexByOriginalUrl(info.url);
                if (returnDownloadIndex != -1) {
                    this.returnDownloads.splice(returnDownloadIndex, 1);
                }
            }
        }.bind(this, info));
    browser.windows.getCurrent(function(w){
        chrome.windows.update(w.id, {focused: true})
    });
};

DownloadsInterceptManager.prototype.onBeforeSendHeaders = function(details)
{
    var returnDownloadIndex = this.returnDownloadIndexByOriginalUrl(details.url);
    if (returnDownloadIndex == -1) {
        return;
    }
    var referer = this.returnDownloads[returnDownloadIndex].httpReferer;
    var isRefererSet = false;
    var headers = details.requestHeaders;
    var blockingResponse = {};

    for (var i = 0; i < headers.length; ++i) {
        if (headers[i].name.toLowerCase() == "referer") {
            headers[i].value = referer;
            isRefererSet = true;
            break;
        }
    }
    if (!isRefererSet) {
        headers.push({
            name: "Referer",
            value: referer
        });
    }
    blockingResponse.requestHeaders = headers;
    return blockingResponse;
};

DownloadsInterceptManager.prototype.onBeforeRequest = function(details)
{
};

DownloadsInterceptManager.prototype.onSendHeaders = function(details)
{
    if (details.method == "GET") {
        var bIsExists = false;
        var reqReferrer = details.initiator;
        if(reqReferrer) {
            for (var j = 0; j < details.length; ++j)  {
                var rheader = r[j];
                if (rheader.name.toLowerCase() == "referrer" ||
                    rheader.name.toLowerCase() == "referer") {
                    bIsExists = true;
                    break;
                }
            }
            if(!bIsExists) {
                var httpReferer = reqReferrer;
                if(!httpReferer.endsWith("/")) {
                    httpReferer = httpReferer + "/";
                }
                details.requestHeaders.push( {'name': "referer", 'value': httpReferer});
            }
        }
        this.requestsHeaders.set(details.requestId, details.requestHeaders);
        setTimeout(this.requestsHeaders.delete.bind(this.requestsHeaders, details.requestId), 120000);
    }
};

DownloadsInterceptManager.prototype.onHeadersReceived = function(details)
{
    return this.interceptIfRequiredByHeaders(details);
};

DownloadsInterceptManager.prototype.responseHeadersToMap = function(responseHeadersArr)
{
    if (!responseHeadersArr || !responseHeadersArr.length) {
        return new Map();
    }
    var headers_map = new Map();
    for (var i = 0; i < responseHeadersArr.length; i++) {
        headers_map.set(responseHeadersArr[i].name.toLowerCase(), responseHeadersArr[i].value);
    }
    return headers_map;
};

DownloadsInterceptManager.prototype.interceptIfRequiredByHeaders = function(details)
{
    var result;
    if (details.tabId < 0) {
        return;
    }
    if (this.enable) {
        var file = false;
        if (details.type != "xmlhttprequest" && details.method == "GET" && 
            ( details.type == 'main_frame' || details.type == 'sub_frame'))  {
            var responseHeadersMap = this.responseHeadersToMap(details.responseHeaders);
            details.responseHeadersMap = responseHeadersMap;

            if (responseHeadersMap.has("content-disposition")) {
                file = true;
            }
            if (responseHeadersMap.has("content-type")) {
                var cType = responseHeadersMap.get("content-type").toLowerCase();
                if (cType.indexOf("json") != -1 ||
                    cType.indexOf("image/") != -1 ||
                   (cType.indexOf("text") != -1 && cType.indexOf("text/x-sql") == -1) ||
                    cType.indexOf("javascript") != -1 ||
                    cType.indexOf("application/x-protobuf") != -1 ||
                    cType.indexOf("application/binary") != -1 ||
                    cType.indexOf("application/pdf") != -1 ||
                    cType.indexOf("application/x-bittorrent") != -1) {
                    file = false;
                }
                else if (details.method != "POST" && cType.indexOf("application") != -1) {
                    file = true;
                }
            }

            if (file) {
                if (responseHeadersMap.has("content-length")) {
                    // int64 too long 
                    var iLength = parseInt(responseHeadersMap.get("content-length"));
                    if (iLength < 1024 * 1024) {
                        file = false;
                    }
                }
            }
        }

        if (file) {
            var retDownloadIndex = this.returnDownloadIndexByOriginalUrl(details.url);
            if (retDownloadIndex != -1) {
                if (!--this.returnDownloads[retDownloadIndex].refCount) {
                    this.returnDownloads.splice(retDownloadIndex, 1);
                }
            } else {
                var referrer = "";
                if (this.requestsHeaders.has(details.requestId)) {
                    var r = this.requestsHeaders.get(details.requestId);
                    for (var j = 0; j < r.length; ++j)  {
                        var rheader = r[j];
                        if (rheader.name.toLowerCase() == "referrer" ||
                            rheader.name.toLowerCase() == "referer")
                            referrer = rheader.value;
                    }
                }
                var downloadInfo = new DownloadInfo(
                    details.url,
                    "",
                    referrer);
                this.onDownloadIntercepted(downloadInfo, details);
                result = { 'redirectUrl': "javascript:" };
            }
        }
    }
    this.requestsHeaders.delete(details.requestId);
    return result;
};
