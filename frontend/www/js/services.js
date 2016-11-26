angular.module('starter.services', [])

.factory('Chats', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  var devices = [
{"name":"7GW008","x":40.90634536743164,"y":5.444159984588623,"type":"desk","data_source":"12129"},
{"name":"7GW007","x":40.68742752075195,"y":6.694843292236328,"type":"desk","data_source":"12128"},
{"name":"7GW006","x":40.429901123046875,"y":7.9178266525268555,"type":"desk","data_source":"12127"},
{"name":"7GW005","x":40.19260787963867,"y":9.135472297668457,"type":"desk","data_source":"12126"},
{"name":"7GW001","x":41.08650207519531,"y":9.296831130981445,"type":"desk","data_source":"11333"},
{"name":"7GW002","x":41.314613342285156,"y":8.064190864562988,"type":"desk","data_source":"11334"},
{"name":"7GW003","x":41.542728424072266,"y":6.8315510749816895,"type":"desk","data_source":"12123"},
{"name":"7GW004","x":41.776702880859375,"y":5.553354263305664,"type":"desk","data_source":"12124"},
{"name":"7GW011","x":37.90270233154297,"y":2.6865131855010986,"type":"desk","data_source":"12129"},
{"name":"7GW012","x":37.46096420288086,"y":3.9459879398345947,"type":"desk","data_source":"12130"},
{"name":"7GW014","x":36.21446990966797,"y":4.057483196258545,"type":"desk","data_source":"12132"},
{"name":"7GW013","x":37.15354919433594,"y":2.813201427459717,"type":"desk","data_source":"12131"},
{"name":"7GW015","x":35.439727783203125,"y":3.0244944095611572,"type":"desk","data_source":"12133"},
{"name":"7GW022","x":24.663780212402344,"y":4.480069160461426,"type":"desk","data_source":"12135"},
{"name":"7GW021","x":24.56987190246582,"y":5.724350452423096,"type":"desk","data_source":"12134"},
{"name":"7GW023","x":23.37254524230957,"y":6.264321804046631,"type":"desk","data_source":"12136"},
{"name":"7GW024","x":23.935993194580078,"y":4.714839458465576,"type":"desk","data_source":"12137"},
{"name":"7GW053","x":19.56926918029785,"y":6.311275959014893,"type":"desk","data_source":"12150"},
{"name":"7GW052","x":20.226625442504883,"y":7.53208065032959,"type":"desk","data_source":"12149"},
{"name":"7GW051","x":20.860504150390625,"y":8.61202335357666,"type":"desk","data_source":"12148"},
{"name":"7GW054","x":20.062286376953125,"y":8.987654685974121,"type":"desk","data_source":"12151"},
{"name":"7GW055","x":19.404930114746094,"y":7.8607587814331055,"type":"desk","data_source":"12152"},
{"name":"7GW056","x":18.794527053833008,"y":6.757339000701904,"type":"desk","data_source":"12153"},
{"name":"7GW063","x":16.058305740356445,"y":8.609407424926758,"type":"desk","data_source":"12156"},
{"name":"7GW062","x":16.86760139465332,"y":9.65365982055664,"type":"desk","data_source":"12155"},
{"name":"7GW061","x":17.59857940673828,"y":10.671807289123535,"type":"desk","data_source":"12154"},
{"name":"7GW064","x":16.945920944213867,"y":11.220039367675781,"type":"desk","data_source":"12157"},
{"name":"7GW065","x":16.162731170654297,"y":10.254105567932129,"type":"desk","data_source":"12158"},
{"name":"7GW066","x":15.3273286819458,"y":9.105427742004395,"type":"desk","data_source":"12159"},
{"name":"7GW071","x":14.726882934570312,"y":13.099695205688477,"type":"desk","data_source":"12160"},
{"name":"7GW072","x":13.76094913482666,"y":12.18597412109375,"type":"desk","data_source":"12161"},
{"name":"7GW073","x":12.821122169494629,"y":11.115614891052246,"type":"desk","data_source":"12162"},
{"name":"7GW076","x":12.22067642211914,"y":11.846590995788574,"type":"desk","data_source":"12165"},
{"name":"7GW074","x":14.022012710571289,"y":13.752352714538574,"type":"desk","data_source":"12163"},
{"name":"7GW082","x":11.045891761779785,"y":15.00545597076416,"type":"desk","data_source":"12167"},
{"name":"7GW083","x":10.001638412475586,"y":14.196160316467285,"type":"desk","data_source":"12168"},
{"name":"7GW085","x":10.497658729553223,"y":15.658114433288574,"type":"desk","data_source":"12170"},
{"name":"7GW084","x":11.5158052444458,"y":16.49351692199707,"type":"desk","data_source":"12169"},
{"name":"7GW042","x":21.17514419555664,"y":12.499249458312988,"type":"desk","data_source":"12143"},
{"name":"7GW041","x":21.436208724975586,"y":13.178013801574707,"type":"desk","data_source":"12142"},
{"name":"7GW044","x":20.313636779785156,"y":13.38686466217041,"type":"desk","data_source":"12145"},
{"name":"7GW043","x":19.922040939331055,"y":15.423157691955566,"type":"desk","data_source":"12144"},
{"name":"7GW046","x":18.747257232666016,"y":15.083775520324707,"type":"desk","data_source":"12147"},
{"name":"7GW045","x":19.399913787841797,"y":15.866965293884277,"type":"desk","data_source":"12146"},
{"name":"7GW032","x":25.639326095581055,"y":17.4333438873291,"type":"desk","data_source":"12139"},
{"name":"7GW034","x":24.725605010986328,"y":18.320959091186523,"type":"desk","data_source":"12141"},
{"name":"7GW031","x":25.561006546020508,"y":18.947511672973633,"type":"desk","data_source":"12138"},
{"name":"7GW033","x":25.117198944091797,"y":19.547956466674805,"type":"desk","data_source":"12140"},
{"name":"7GW081","x":12.116250991821289,"y":15.78864574432373,"type":"desk","data_source":"12166"},
{"name":"7GW086","x":9.427299499511719,"y":14.8488187789917,"type":"desk","data_source":"12171"},
{"name":"7GW102","x":5.694094657897949,"y":48.490516662597656,"type":"desk","data_source":"12177"},
{"name":"7GW101","x":6.398965835571289,"y":48.28166580200195,"type":"desk","data_source":"12176"},
{"name":"7GW092","x":11.776867866516113,"y":46.924137115478516,"type":"desk","data_source":"12173"},
{"name":"7GW094","x":11.5158052444458,"y":48.203346252441406,"type":"desk","data_source":"12175"},
{"name":"7GW093","x":12.325100898742676,"y":47.86396408081055,"type":"desk","data_source":"12174"},
{"name":"7GW091","x":13.05607795715332,"y":46.48033142089844,"type":"desk","data_source":"12172"},
{"name":"7GW121","x":13.865373611450195,"y":50.21353530883789,"type":"desk","data_source":"12184"},
{"name":"7GW122","x":12.951652526855469,"y":51.04893493652344,"type":"desk","data_source":"12185"},
{"name":"7GW124","x":13.734842300415039,"y":51.25778579711914,"type":"desk","data_source":"12187"},
{"name":"7GW123","x":15.092370986938477,"y":50.448490142822266,"type":"desk","data_source":"12186"},
{"name":"7GW113","x":6.398965835571289,"y":51.64937973022461,"type":"desk","data_source":"12180"},
{"name":"7GW116","x":6.816666603088379,"y":52.45867919921875,"type":"desk","data_source":"12183"},
{"name":"7GW115","x":7.834813117980957,"y":51.85823059082031,"type":"desk","data_source":"12182"},
{"name":"7GW114","x":8.879066467285156,"y":51.28389358520508,"type":"desk","data_source":"12181"},
{"name":"7GW112","x":7.312687397003174,"y":51.075042724609375,"type":"desk","data_source":"12179"},
{"name":"7GW111","x":8.40915298461914,"y":50.52680969238281,"type":"desk","data_source":"12178"},
{"name":"7GW133","x":8.565790176391602,"y":55.252052307128906,"type":"desk","data_source":"12190"},
{"name":"7GW136","x":9.087916374206543,"y":55.9830322265625,"type":"desk","data_source":"12193"},
{"name":"7GW135","x":10.02774429321289,"y":55.38258361816406,"type":"desk","data_source":"12192"},
{"name":"7GW132","x":9.479512214660645,"y":54.52107620239258,"type":"desk","data_source":"12189"},
{"name":"7GW131","x":10.445446014404297,"y":53.89452362060547,"type":"desk","data_source":"12188"},
{"name":"7GW134","x":11.019784927368164,"y":54.52107620239258,"type":"desk","data_source":"12191"},
{"name":"7GW152","x":21.984439849853516,"y":51.10114669799805,"type":"desk","data_source":"12201"},
{"name":"7GW154","x":22.872055053710938,"y":51.93655014038086,"type":"desk","data_source":"12203"},
{"name":"7GW153","x":24.125158309936523,"y":51.59716796875,"type":"desk","data_source":"12202"},
{"name":"7GW151","x":23.498607635498047,"y":51.075042724609375,"type":"desk","data_source":"12200"},
{"name":"7GW143","x":11.176423072814941,"y":58.42743682861328,"type":"desk","data_source":"12196"},
{"name":"7GW146","x":11.802974700927734,"y":59.08009338378906,"type":"desk","data_source":"12199"},
{"name":"7GW145","x":12.664483070373535,"y":58.21858596801758,"type":"desk","data_source":"12198"},
{"name":"7GW144","x":13.525991439819336,"y":57.4092903137207,"type":"desk","data_source":"12197"},
{"name":"7GW142","x":12.011825561523438,"y":57.618141174316406,"type":"desk","data_source":"12195"},
{"name":"7GW141","x":12.899439811706543,"y":56.75663375854492,"type":"desk","data_source":"12194"},
{"name":"7GW163","x":14.204755783081055,"y":61.29913330078125,"type":"desk","data_source":"12206"},
{"name":"7GW166","x":14.831307411193848,"y":61.79515075683594,"type":"desk","data_source":"12209"},
{"name":"7GW165","x":15.614497184753418,"y":60.855323791503906,"type":"desk","data_source":"12208"},
{"name":"7GW162","x":14.9357328414917,"y":60.33319854736328,"type":"desk","data_source":"12205"},
{"name":"7GW161","x":15.640604019165039,"y":59.39337158203125,"type":"desk","data_source":"12204"},
{"name":"7GW164","x":16.42379379272461,"y":59.94160461425781,"type":"desk","data_source":"12207"},
{"name":"7GW171","x":19.243276596069336,"y":61.97789764404297,"type":"desk","data_source":"12210"},
{"name":"7GW172","x":19.922040939331055,"y":62.3433837890625,"type":"desk","data_source":"12211"},
{"name":"7GW173","x":17.02423858642578,"y":63.622596740722656,"type":"desk","data_source":"12212"},
{"name":"7GW174","x":18.0945987701416,"y":64.30136108398438,"type":"desk","data_source":"12213"},
{"name":"7GW175","x":19.11274528503418,"y":64.77127075195312,"type":"desk","data_source":"12214"},
{"name":"7GW183","x":21.52758026123047,"y":66.01338958740234,"type":"desk","data_source":"12217"},
{"name":"7GW186","x":22.336875915527344,"y":66.35277557373047,"type":"desk","data_source":"12220"},
{"name":"7GW185","x":22.832895278930664,"y":65.25630950927734,"type":"desk","data_source":"12219"},
{"name":"7GW184","x":23.355022430419922,"y":64.10762786865234,"type":"desk","data_source":"12218"},
{"name":"7GW181","x":22.519620895385742,"y":63.79435348510742,"type":"desk","data_source":"12215"},
{"name":"7GW182","x":22.02359962463379,"y":64.91692352294922,"type":"desk","data_source":"12216"},
{"name":"7GW075","x":13.191810607910156,"y":12.770859718322754,"type":"desk","data_source":"12164"},
{"name":"7GP03","x":12.44039249420166,"y":42.264530181884766,"type":"desk","data_source":"12240"},
{"name":"7GP04","x":11.433479309082031,"y":42.54444122314453,"type":"desk","data_source":"12241"},
{"name":"7GP01","x":24.486507415771484,"y":10.964252471923828,"type":"desk","data_source":"12229"},
{"name":"7GP02","x":24.084806442260742,"y":9.975123405456543,"type":"desk","data_source":"12230"},

{"name":"7GM06","x":29.685983657836914,"y":18.167064666748047,"type":"motion","data_source":"12227"},
{"name":"7GM02","x":33.12549591064453,"y":17.170385360717773,"type":"motion","data_source":"12223"},
{"name":"7GM01","x":38.079368591308594,"y":17.17503547668457,"type":"motion","data_source":"12222"},
{"name":"7GM03","x":31.166278839111328,"y":1.9764822721481323,"type":"motion","data_source":"12224"},
{"name":"7GM05","x":29.083141326904297,"y":2.6080498695373535,"type":"motion","data_source":"12226"},
{"name":"7GM04","x":27.99672508239746,"y":4.770987033843994,"type":"motion","data_source":"12225"},
{"name":"7GM07","x":3.8544158935546875,"y":24.844331741333008,"type":"motion","data_source":"12228"},
{"name":"7GM08","x":17.101633071899414,"y":36.92807388305664,"type":"motion","data_source":"12231"},
{"name":"7GM09","x":1.7216264009475708,"y":34.48324203491211,"type":"motion","data_source":"12232"},
{"name":"7GM10","x":1.8282151222229004,"y":37.931358337402344,"type":"motion","data_source":"12233"},
{"name":"7GM11","x":8.06295108795166,"y":40.19964599609375,"type":"motion","data_source":"12234"},
{"name":"7GM12","x":2.438549518585205,"y":42.93098068237305,"type":"motion","data_source":"12235"},
{"name":"7GM13","x":4.924922943115234,"y":44.50825119018555,"type":"motion","data_source":"12236"},
{"name":"7GM14","x":2.734295606613159,"y":45.15746307373047,"type":"motion","data_source":"12237"},
{"name":"7GM15","x":30.186193466186523,"y":53.33017349243164,"type":"motion","data_source":"12238"},
{"name":"7GM16","x":26.316184997558594,"y":68.3836898803711,"type":"motion","data_source":"12239"},

{"name":"Tomi","x":0.0,"y":0.0,"type":"location","data_source":"12018"},
{"name":"Ilona","x":0.0,"y":0.0,"type":"location","data_source":"11977"},
{"name":"Ville","x":0.0,"y":0.0,"type":"location","data_source":"12053"},
{"name":"Jukka","x":0.0,"y":0.0,"type":"location","data_source":"12067"},
{"name":"Pirjo","x":0.0,"y":0.0,"type":"location","data_source":"11964"},

{"name":"Lamp_1","x":38,"y":5,"type":"lamp","data_source":null,"control_id":"8BDE"},
{"name":"Lamp_2","x":18,"y":8,"type":"lamp","data_source":null,"control_id":"8B9B"},
{"name":"Lamp_3","x":24,"y":19,"type":"lamp","data_source":null,"control_id":"8BEF"},
{"name":"Lamp_4","x":11,"y":15,"type":"lamp","data_source":null,"control_id":"8C07"},
{"name":"Lamp_5","x":8,"y":29,"type":"lamp","data_source":null,"control_id":"8B96"},
{"name":"Lamp_6","x":15,"y":48,"type":"lamp","data_source":null,"control_id":"8B6A"},
{"name":"Lamp_7","x":9,"y":54,"type":"lamp","data_source":null,"control_id":"8BC0"},
{"name":"Lamp_8","x":22,"y":52,"type":"lamp","data_source":null,"control_id":null},
{"name":"Lamp_9","x":21,"y":64,"type":"lamp","data_source":null,"control_id":null}
];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    getDevice: function (id) {
      var target = undefined;
      devices.forEach(function (device) {
        if (device.name === id) {
          target = device;
        }
      });
      return target;
    },

    fetchDeviceRemotely: function (id) {
      $http.defaults.headers.common['Authorization'] = 'Basic anVuY3Rpb25faGFja2VyOmUqQE5EXzJmb2E=';
      var url = 'https://tieto.iottc.tieto.com/measurement/measurements?pageSize=1&dateFrom=2016-10-26&dateTo=2016-11-30&revert=true&source=' + id;
      return $http.get(url);
    },

    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
