(function(){
    "use strict";
    window.demo4App = {};
    var demo4App = window.demo4App;
    
    demo4App.userService = {
      getUsers: getUsers 
    };
    
    function getUsers(cb){
        if(localStorage.users){
            var users = JSON.parse(localStorage.users);
            cb(users);
            return;
        }
        var xhr = new XMLHttpRequest();
        xhr.open('GET', encodeURI('http://jsonplaceholder.typicode.com/users'));
        xhr.onload = function() {
            if (xhr.status === 200) {
                var users = JSON.parse(xhr.responseText);
                localStorage.users = JSON.stringify(users);
                cb(users);
            }
        };
    xhr.send();
    };
})();