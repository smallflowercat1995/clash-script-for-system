(function() {
	var _isRoot = false;
	var _isIndex = false;
	var _routedEventObject = null;
	
	function init() {
		if (document.location.href.substring(0, 7) != 'file://') return;
		
		// this is true if this is the root item
		var _isRoot = (window == parent);

		var mainFrame = document.getElementById('mainFrame');

		_isIndex = mainFrame && true; // one way to cast it to a bool		
		
		var eventDiv = document.getElementById('axureEventReceiverDiv');
		if (eventDiv) {
			_routedEventObject = document.createEvent('Event');
			_routedEventObject.initEvent('axureMessageReceiverEvent', true, true);
		} else  {
			return;
		}		
		
		if (_isRoot && _isIndex) {
			chrome.extension.sendRequest({
				message : "showIcon"
			});
		} else if (_isRoot) {
			chrome.extension.sendRequest({
				message : "hideIcon"
			});
		}
		
		if (_isIndex) { initIndex(); }
		
		var eventSenderDiv = document.getElementById('axureEventSenderDiv');
		eventSenderDiv.addEventListener('axureMessageSenderEvent', handleSentEvent);
		
		sendMessage(JSON.stringify({
			message:'initialize'
		}));
	}
	init();

	function handleSentEvent() {
		var eventSenderDiv = document.getElementById('axureEventSenderDiv');
		var message = eventSenderDiv.innerText;
		
		chrome.extension.sendRequest({
			message : "routeEvent",
			data : message
		});
	}
	
	function initIndex() {
		document.body.setAttribute('pluginDetected', 'true');
	}

	function initPage() {}
	
	function sendMessage(requestJson) {
		var axureEventDiv = document.getElementById('axureEventReceiverDiv');
		if (axureEventDiv) {
			axureEventDiv.innerText = requestJson;
			axureEventDiv.dispatchEvent(_routedEventObject);
		}
	}

	function onRequest(request, sender, callback) {
		if (request.message == 'routeEvent') {
			sendMessage(request.data);
		}
	};
	chrome.extension.onRequest.addListener(onRequest);
})();
