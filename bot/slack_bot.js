
if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}

var Botkit = require('botkit');
var os = require('os');

var controller = Botkit.slackbot({
    debug: true,
    // debug: false
});

var bot = controller.spawn({
    token: process.env.token
}).startRTM();


controller.hears(['hello', 'hi'], 'direct_message,direct_mention,mention', function(bot, message) {

    bot.api.reactions.add({
        timestamp: message.ts,
        channel: message.channel,
        name: 'robot_face',
    }, function(err, res) {
        if (err) {
            bot.botkit.log('Failed to add emoji reaction :(', err);
        }
    });


    controller.storage.users.get(message.user, function(err, user) {
        if (user && user.name) {
            bot.reply(message, 'Hello ' + user.name + '!!');
        } else {
            bot.reply(message, 'Hello.');
        }
    });
});

controller.hears(['call me (.*)', 'my name is (.*)'], 'direct_message,direct_mention,mention', function(bot, message) {
    var name = message.match[1];
    controller.storage.users.get(message.user, function(err, user) {
        if (!user) {
            user = {
                id: message.user,
            };
        }
        user.name = name;
	
        controller.storage.users.save(user, function(err, id) {
            bot.reply(message, 'Got it. I will call you ' + user.name + ' from now on.');
        });
    });
});

controller.hears(['what is my name', 'who am i'], 'direct_message,direct_mention,mention', function(bot, message) {
    controller.storage.users.get(message.user, function(err, user) {
        if (user && user.name) {
            bot.reply(message, 'Your name is ' + user.name);
        } else {
            bot.startConversation(message, function(err, convo) {
                if (!err) {
                    convo.say('I do not know your name yet!');
                    convo.ask('What should I call you?', function(response, convo) {
                        convo.ask('You want me to call you `' + response.text + '`?', [
                            {
                                pattern: 'yes',
                                callback: function(response, convo) {
                                    // since no further messages are queued after this,
                                    // the conversation will end naturally with status == 'completed'
                                    convo.next();
                                }
                            },
                            {
                                pattern: 'no',
                                callback: function(response, convo) {
                                    // stop the conversation. this will cause it to end with status == 'stopped'
                                    convo.stop();
                                }
                            },
                            {
                                default: true,
                                callback: function(response, convo) {
                                    convo.repeat();
                                    convo.next();
                                }
                            }
                        ]);

                        convo.next();

                    }, {'key': 'nickname'}); // store the results in a field called nickname

                    convo.on('end', function(convo) {
                        if (convo.status == 'completed') {
                            bot.reply(message, 'OK! I will update my dossier...');

                            controller.storage.users.get(message.user, function(err, user) {
                                if (!user) {
                                    user = {
                                        id: message.user,
                                    };
                                }
                                user.name = convo.extractResponse('nickname');
                                controller.storage.users.save(user, function(err, id) {
                                    bot.reply(message, 'Got it. I will call you ' + user.name + ' from now on.');
                                });
                            });



                        } else {
                            // this happens if the conversation ended prematurely for some reason
                            bot.reply(message, 'OK, nevermind!');
                        }
                    });
                }
            });
        }
    });
});


controller.hears(['shutdown'], 'direct_message,direct_mention,mention', function(bot, message) {

    bot.startConversation(message, function(err, convo) {

        convo.ask('Are you sure you want me to shutdown?', [
            {
                pattern: bot.utterances.yes,
                callback: function(response, convo) {
                    convo.say('Bye!');
                    convo.next();
                    setTimeout(function() {
                        process.exit();
                    }, 3000);
                }
            },
        {
            pattern: bot.utterances.no,
            default: true,
            callback: function(response, convo) {
                convo.say('*Phew!*');
                convo.next();
            }
        }
        ]);
    });
});


controller.hears(['uptime', 'identify yourself', 'who are you', 'what is your name'],
    'direct_message,direct_mention,mention', function(bot, message) {

        var hostname = os.hostname();
        var uptime = formatUptime(process.uptime());

        bot.reply(message,
            ':robot_face: I am a bot named <@' + bot.identity.name +
             '>. I have been running for ' + uptime + ' on ' + hostname + '.');

    });

controller.hears(['meeting with (.*)','appointment with (.*)', 'reservation with (.*)'], 
    'direct_message,direct_mention,mention', function(bot,message) {
        console.log("message, ", message);
        var guestName = message.match[1];
        console.log("XXXXXXXXXX, ", guestName);
        controller.storage.users.get(message.user, function(err, user) {
            if (!user) {
                    user = {
                        id: message.user,
                    };
            }
            user.guestName = guestName;



            controller.storage.users.save(user, function(err, id) {
                    bot.reply(message, 'Hello, you have a meeting or reservation, your guest is here. His name is ' + user.guestName + ' .Please confirm your meeting appointment.');
            });
        });
});

controller.hears(("confirm meeting"), 'direct_message,direct_mention,mention', function(bot,message) {
    controller.storage.users.get(message.user, function(err, user){
        bot.reply(message,
        'You have confirm your meeting with ' + user.guestName + '. Where is the meeting place?');    
    });
    
});

controller.hears(['room (.*)'], 'direct_message,direct_mention,mention', function(bot,message){
    var room = message.match[1];
    controller.storage.users.get(message.user, function(err, user){
        if (!user) {
            user = {
                id: message.user,
            };
        }
        user.room = room;

        controller.storage.users.save(user, function(err, id) {
            bot.reply(message,
            'Great! I will contact the guest and they will meet you at room ' + user.room + '.');
        });
    });
    
});

function formatUptime(uptime) {
    var unit = 'second';
    if (uptime > 60) {
        uptime = uptime / 60;
        unit = 'minute';
    }
    if (uptime > 60) {
        uptime = uptime / 60;
        unit = 'hour';
    }
    if (uptime != 1) {
        unit = unit + 's';
    }

    uptime = uptime + ' ' + unit;
    return uptime;
}



/******************************
********** Web socket server ************
*****************************/

var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function(request, response) {
    // process HTTP request. Since we're writing just WebSockets server
    // we don't have to implement anything.
    console.log('creating WS server...')
});
server.listen(1337, function() {
});

// create the server
wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: true
});

// WebSocket server
wsServer.on('connect', function(connection) {
    console.log('new connection');
    
    // This is the most important callback for us, we'll handle
    // all messages from users here.
    connection.on('message', function(message) {
	console.log('new message', message);
	var data = JSON.parse(message['utf8Data']);
	var type = data['type'];
	if(data['type'] == 'id'){
	    var visitor_name = data['id'];
	    console.log('new id', data['id']);

	    // check appointment
	    var employee_id = 'U376YFTGT';  // employee, hoang
	    var time = 'some time';

	    var message = { type: 'message',
		  channel: 'D36JGQ55X',
		  user: 'U37V2PSB1',
		  text: '',
		  ts: '1480159611.000056',
		  team: 'T37AUFAHJ',
		  event: 'direct_message'
		};
	    
	    // send msg to employee
	    controller.storage.users.get(employee_id, function(err, user) {
		if (!user) {
		    user = {
			id: employee_id,
		    };
		}
		console.log('what the hell');
		user.name = 'Hoang';

		var token = process.env.token;
		bot.api.callAPI('chat.postMessage',
				{'token': token,
				 'channel': 'D36H7J9J4',
				 'text': visitor_name + ' wants to meet you at ' + time},
				function(obj){
				    console.log(obj);						
				})
		// bot.sendWebhook({
		//     text: visitor_name + ' wants to meet you at ' + time,
		//     channel: '#general',		    
		// },function(err,res) {
		//     // handle error
		//     console.log(err);
		// });		
		// controller.storage.users.save(user, function(err, id) {
		//     bot.reply(message, visitor_name + ' wants to meet you at ' + time);
		//     console.log('-----err', err);
		//     console.log('-----id', id);
		// });
    });	    
	}
    });

    connection.on('close', function(connection) {
	// close user connection
	
    });
    
});

