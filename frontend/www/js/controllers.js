angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('OnlineUserCtrl', function ($scope) {

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('BotCtrl', function(Chats, $scope, $ionicFrostedDelegate, $ionicScrollDelegate, $rootScope) {
 
  var messageIter = 0;
  $scope.messages = [
    'hello, i\'m the Reception Bot, what can I help you?',
    'hi'
  ];

  $scope.add = function (text) {
    $scope.messages.push(text);
    var detection = $scope.detect(text);
    var id = detection.trim();
    if (id) {
      var device = Chats.getDevice(id);
      if (device) {
        Chats.fetchDeviceRemotely(device.data_source).then(function (data) {
          console.log('desk data', data);
          if (data.data.measurements.value) {
            var message = id + ' Occupied now!';
            $scope.messages.push(message);    
          } else {
            var message = id + ' FREE now!';
            $scope.messages.push(message);    
          }
        }, function () {
          var message = 'Sorry, i can not get' + ' ' + id + 'information now';
          $scope.messages.push(message);  
        })
      } else {
        var message = 'Sorry, i can not find' + ' ' + id;
        $scope.messages.push(message);
      }
    }
    $scope.content = '';
  };

  $scope.detect = function (text) {
    if (text.indexOf('room') !== -1) {
      return text.split('room')[1];
    } else if (text.indexOf('desk') !== -1) {
      return text.split('desk')[1];
    }
  }
});
