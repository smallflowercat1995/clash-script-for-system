function XDownNativeHostManager()
{
    this.portFailed = false;
    this.hasNativeHost = false;
    this.ready = false;
    this.scheduledRequests = new Array;
    this.requestsManager = new RequestsManager;
    this.handshakeResp = {};
    this.requestsManager.sendRequest = function(req) {
        try {
            this.port.postMessage(req);
        } catch (ex) {
            console.log("postMessage== exception==",ex);
            if(ex && ex.toString() && ex.toString().indexOf("use a disconnected") != -1) {
                // this.restartIfNeeded();
                // console.log("111 postMessage== restartIfNeeded==");
                var that = this;
                setTimeout (function () {
                    console.log('setTimeout===3000==');
                    that.initialize();
                }, 1000);
            }
        }
    }.bind (this);
}

XDownNativeHostManager.prototype.restartIfNeeded = function()
{
    if (this.portFailed) {
        this.initialize();
    }
};

XDownNativeHostManager.prototype.initialize = function()
{
    this.port = browser.runtime.connectNative('org.xdown.xmsg');
    this.port.onMessage.addListener(
        this.onPortMessage.bind(this));
    this.port.onDisconnect.addListener(
        this.onPortDisconnect.bind(this));

    this.requestsManager.performRequest(
        this.onStartHandshake(),
        this.onParseHandshake.bind(this)
    );
}

XDownNativeHostManager.prototype.onStartHandshake = function() {
    this.handshake = new Object;
    this.handshake.id = "1",
    this.handshake.type = "handshake"
    this.handshake.api_version = "1";
    this.handshake.browser = window.browserName;
    return this.handshake;
}


XDownNativeHostManager.prototype.onParseHandshake = function(resp)
{
    if (resp.error) {
        return;
    }
    console.log('xdown interface init success....');
    
    this.ready = true;
    this.onReady();
    // for (var i = 0; i < this.scheduledRequests.length; i++) {
    //     this.postMessage(this.scheduledRequests[i].task, this.scheduledRequests[i].callback);
    // }
    this.scheduledRequests = [];
    this.handshakeResp = resp;

     if (typeof this.onInitialized == 'function')
    {
        this.onInitialized();
    }
}

XDownNativeHostManager.prototype.onGotSettings = function(resp)
{
}

XDownNativeHostManager.prototype.onReady = function()
{
}

XDownNativeHostManager.prototype.onPortMessage = function(msg)
{
    this.portFailed = false;
    this.hasNativeHost = true;
    this.requestsManager.onRequestResponse(msg);
}

XDownNativeHostManager.prototype.onPortDisconnect = function(msg)
{
    this.portFailed = true;
    var errmsg = "";
    try {
        errmsg = browser.runtime.lastError.message;
    } catch (e) { 
    }
    console.log("[onDisconnect] === errmsg ",errmsg);
    this.closeRequestsInProgress();
}

XDownNativeHostManager.prototype.closeRequestsInProgress = function()
{
    // console.log('====closeRequestsInProgress====');
    this.requestsManager.closeRequestsInProgress(
        function (id, callback)  {
        if (callback)  {
            var resp = new Object;
            resp.id = id;
            resp.error = "ipc failure";
            callback (resp);
        }				
    });
}


XDownNativeHostManager.prototype.onNativeHostNotFound = function()
{   
}

XDownNativeHostManager.prototype.postMessage = function(task, callback)
{
    if (this.ready) {
        this.requestsManager.performRequest(task, callback);
    } else {
        var o = new Object;
        o.task = task;
        o.callback = callback;
        this.scheduledRequests.push(o);
    }
}