function DownloadInfo(url, redirectUrl, referrer, postData)
{
	if(referrer) {
    	this.httpReferer = referrer;
    }
    if (url && redirectUrl) {
        this.url = redirectUrl;
        this.originalUrl = url;
		if (!referrer && this.originalUrl.lastIndexOf('/') > 0 ) {
			this.httpReferer = this.originalUrl.substr(0,this.originalUrl.lastIndexOf('/'));
		}
    } else {
        this.url = url || "";
        this.originalUrl = this.url;
        if (!referrer && this.url.lastIndexOf('/') > 0 ) {
			this.httpReferer = this.url.substr(0,this.url.lastIndexOf('/'));
		}
    }
}


try
{
    exports.DownloadInfo = DownloadInfo;
}
catch (e) {
    
}