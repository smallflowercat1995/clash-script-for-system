
document.addEventListener('ADD-XDOWN-EVENT', function(evt) {
	chrome.runtime.sendMessage( {type: "ADD-XDOWN-EVENT", message: evt.detail}, 
	function(response) {
		console.log("==response===", response);
	});
}, false);

document.addEventListener('SHOW-XDOWN-SETTING', function(evt) {
	chrome.runtime.sendMessage( {type: "SHOW-XDOWN-SETTING", message: evt.detail}, 
	function(response) {
		console.log("==response===", response);
	});
}, false);
