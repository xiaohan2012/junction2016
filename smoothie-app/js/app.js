var username='Han Xiao';

$(function () {
    // if user is running mozilla then use it's built-in WebSocket
    window.WebSocket = window.WebSocket || window.MozWebSocket;

    var ws = new WebSocket('ws://193.166.24.212:1337');

    ws.onopen = function () {
	// ws is opened and ready to use
	console.log('ws open')
	ws.send(JSON.stringify(
	    {'type': 'id',
	     'id': username}
	));
    };

    ws.onerror = function (error) {
	// an error occurred when sending/receiving data
	console.log('ws error', error);
    };

    ws.onmessage = function (message) {
	// try to decode json (I assume that each message from server is json)
	try {
	    var json = JSON.parse(message.data);
	    console.log(json);
            
	} catch (e) {
	    console.log('This doesn\'t look like a valid JSON: ', message.data);
	    return;
            
	}
	// handle incoming message	
    };
});
