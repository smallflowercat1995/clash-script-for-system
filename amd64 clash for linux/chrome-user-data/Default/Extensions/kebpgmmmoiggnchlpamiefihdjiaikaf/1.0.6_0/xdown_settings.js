
function XDownSettings(){
}

XDownSettings.prototype.initialize = function () {
	this.XDownLanguage();
    this.addEventListeners();
};

XDownSettings.prototype.XDownLanguage = function () {
	var settingText = chrome.i18n.getMessage("settingText");
	if(!settingText) {
		settingText = 'Setting XDown';
	}
	document.getElementById('spanSettingText').innerHTML = settingText;
	
	var aoubtText = chrome.i18n.getMessage("aoubtText");
	if(!aoubtText) {
		aoubtText = 'About XDown';
	}
	document.getElementById('spanAoubtText').innerHTML = aoubtText;
};

XDownSettings.prototype.addEventListeners = function () {
    document.getElementById('settingXDownLink').addEventListener('click', this.onSettingXDownClick.bind(this));
    document.getElementById('aboutXDownLink').addEventListener('click', this.onAboutXDownClick.bind(this));
};

XDownSettings.prototype.onSettingXDownClick = function () {
	window.browser.runtime.sendMessage({type: "SHOW-XDOWN-SETTING"}, function () {
        window.close()
    }.bind(this));
};

XDownSettings.prototype.onAboutXDownClick = function () {
    window.open('https://xdown.org');
};

var xdmSettings = new XDownSettings;
xdmSettings.initialize();
