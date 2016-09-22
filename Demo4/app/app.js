(function(){
    var demo4App = window.demo4App || {};
    "use strict";
    
    document.getElementById("LoadUsersButton").addEventListener("click", loadUsers);
 
    
    function loadUsers(evt){
        evt.stopPropagation();
        var list = document.getElementById("userList");
        list.innerHTML = "Lade ..."
        demo4App.userService.getUsers(displayUsers);
    }
    
    function displayUsers(users){
        console.log(users);
        var list = document.getElementById("userList");
        var usersHtml = "";
        users.forEach(function(user) {
            usersHtml += "<p>" + user.name + ", " + user.email + "</p>";
        }, this);
        list.innerHTML = usersHtml;
    }
    
})();