var xdownExt = new XDownExtension;
xdownExt.initialize();

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.type == "ADD-XDOWN-EVENT") {
    	xdownExt.onApiRequest(request.message, function(resp) {
    		console.log("===resp===",resp);
    	});
    } else if(request.type == "SHOW-XDOWN-SETTING") {
    	xdownExt.onShowSetting();
    }
    return true;
  }
);
