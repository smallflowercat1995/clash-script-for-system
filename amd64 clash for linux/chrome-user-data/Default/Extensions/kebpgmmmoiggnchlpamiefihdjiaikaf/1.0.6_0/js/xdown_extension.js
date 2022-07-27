function XDownExtension()
{
    this.nhManager = new XDownNativeHostManager;
    this.nhManager.onReady = this.onNativeHostReady.bind(this);
    this.nhManager.onNativeHostNotFound = this.onNativeHostNotFound.bind(this);
    this.nhManager.onGotSettings = this.onGotSettings.bind(this);
    this.diManager = new XDownInterceptManager(this.settingsPageHlpr);
    this.diManager.setNativeHostManager(this.nhManager);
    this.diManager.enable = true;
}

XDownExtension.prototype.initialize = function()
{
    this.nhManager.onInitialized = this.nhManagerInitialized.bind(this);
    this.nhManager.initialize();
};

XDownExtension.prototype.nhManagerInitialized = function()
{
    this.diManager.initialize();
};

XDownExtension.prototype.onNativeHostReady = function()
{
};

XDownExtension.prototype.onShowSetting = function() {
    this.nhManager.postMessage(
        new XDownShowSettingsTask,
    this.onGotSettings.bind(this));
}

XDownExtension.prototype.onApiRequest = function(requests, callback) {
    var task = new XDownApiRequestsTask;
    task.api_requests = requests;
    this.nhManager.postMessage( task, callback);
}

XDownExtension.prototype.onGotSettings = function(resp)
{
    console.log("==onGotSettings==",resp);
};

XDownExtension.prototype.onNativeHostNotFound = function()
{
};

XDownExtension.prototype.onInitialInstall = function()
{
    this.nhManager.restartIfNeeded();
};

