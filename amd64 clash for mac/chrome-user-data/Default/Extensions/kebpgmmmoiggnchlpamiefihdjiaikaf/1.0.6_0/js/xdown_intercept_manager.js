function XDownInterceptManager(setHlpr)
{
}

XDownInterceptManager.prototype = new DownloadsInterceptManager();

XDownInterceptManager.prototype.setNativeHostManager = function(mgr)
{
    this.nhManager = mgr;
};

XDownInterceptManager.prototype.onDownloadIntercepted = function(downloadInfo, details, callbackFn)
{
    downloadInfo.userAgent = navigator.userAgent;
    var cManager = new CookieManager;
    cManager.getCookiesForUrl(
        downloadInfo.url,
        function (cookies) {
            downloadInfo.httpCookies = cookies;
            if(details && details.responseHeadersMap) {
                var contentType = details.responseHeadersMap.get('content-type');
                if (contentType) {
                    downloadInfo.httpContentType = contentType;
                }
                var contentLength = details.responseHeadersMap.get("content-length");
                if (contentLength) {
                    downloadInfo.httpContentLength = contentLength;
                }
                var contentDisposition = details.responseHeadersMap.get('content-disposition');
                if (contentDisposition) {
                    var contentFileName = xdmExtUtils.getNameByDisposition(contentDisposition);
                    if(contentFileName) {
                        downloadInfo.httpFileName = xdmExtUtils.getNameByDisposition(contentDisposition);
                    }
                } else {
                    // http://aaa.com/111.zip
                    // http://bbb.com/111.zip?ts=111
                    var curUrl = details.url;
                    var iPosVal = curUrl.indexOf("?");
                    if(iPosVal > 1) {
                        curUrl = curUrl.substring(0,iPosVal);
                    }
                    iPosVal = curUrl.indexOf("#");
                    if(iPosVal > 1) {
                        curUrl = curUrl.substring(0,iPosVal);
                    }
                    iPosVal = curUrl.lastIndexOf('/');
                    if(iPosVal > 10) {
                        downloadInfo.httpFileName = curUrl.substring(iPosVal + 1);
                    }
                }
            }
            downloadInfo.httpStatus = details.statusCode;
            var task = new XDownCreateDownloadsTask;
            task.create_downloads.catchedDownloads = "1";
            task.create_downloads.waitResponse = "1";
            task.addDownload(downloadInfo);
            this.nhManager.postMessage(
                task,
                function (resp) {
                    var checkRetVal = resp.result == "0";
                    if (resp.error || checkRetVal) {
                        this.returnDownload(downloadInfo, details);
                    }
                }.bind(this)
            );
        }.bind(this));
}
