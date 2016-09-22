(function(){
    "use strict";
    window.demo4App = {};
    var demo4App = window.demo4App;
    
    demo4App.userService = {
      getUsers: getUsers 
    };
    
    function getUsers(cb){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', encodeURI('http://jsonplaceholder.typicode.com/users'));
        xhr.onload = function() {
            if (xhr.status === 200) {
                cb(JSON.parse(xhr.responseText));
            }
        };
    xhr.send();
    };
})();