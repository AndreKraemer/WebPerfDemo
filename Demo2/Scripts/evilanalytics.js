(function(){
    "use strict";
    // Dummy Call
    document.write("<p>boom</p>");
    var color = document.getElementsByTagName("h1")[0].style.color;
    console.log("Farbe" + color);
    document.getElementsByTagName("h1")[0].style.color = "red";
     console.log("calling analytics service .....");
})();