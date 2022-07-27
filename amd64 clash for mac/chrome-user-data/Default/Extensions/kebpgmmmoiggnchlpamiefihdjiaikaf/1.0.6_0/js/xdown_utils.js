xdmExtUtils = {
    getNameByDisposition: function(disposition) {
        var m = disposition.match(/filename[^;=\n]*=(?:(\\?['"])(.*?)\1|(?:[^\s]+'.*?')?([^;\n]*))/i);
        if (m && m.length) {
            let fileName = '';
            if(m.length >= 4 && m[3]) {
                fileName = m[3];
            } else if(m.length >= 3 && m[2]) {
                // fixed
                fileName = m[2];
            }
            if(fileName && fileName.length > 0) {
                fileName = decodeURI(fileName).replace(/\//g,'').replace(/'/g,'').trim();
                if(fileName) {
                    return fileName;
                }
            }
        }
        console.log("[ERROR]==xdown get file name failed, disposition: ",disposition);
        return '';
    },
    getHostFromUrl: function (url) {
        return url.toString().replace(/^.*\/\/(www\.)?([^\/?#:]+).*$/, '$2').toLowerCase();
    },
    normalizeRedirectURL: function (urlRedirect, url) {
        if (urlRedirect.indexOf('//') === 0 && urlRedirect.indexOf('.') > 0){
            var protocolPos = url.indexOf('//');
            return url.substring(0, protocolPos) + urlRedirect;
        }

        if (urlRedirect.lastIndexOf('.') > 0)
        {
            var protocolPos = url.indexOf('//');
            return url.substring(0, protocolPos + 2) + urlRedirect;
        }

        var redirectRequest = urlRedirect.indexOf('?');

        if (redirectRequest === 0){
            var urlQuery = url.indexOf('?');
            if (urlQuery >= 0)
                return url.substring(0, urlQuery) + urlRedirect;
            else
                return url + urlRedirect;
        }

        var lastDot = url.lastIndexOf('.');

        var baseUrl = url;
        var firstSlash = url.indexOf('/', lastDot);
        if (firstSlash >= 0)
            baseUrl = url.substring(0, firstSlash);

        var firstRequestSlash = urlRedirect.indexOf('/');

        if (firstRequestSlash === 0)
            return baseUrl + urlRedirect;
        else
            return baseUrl + '/' + urlRedirect;
    }
};