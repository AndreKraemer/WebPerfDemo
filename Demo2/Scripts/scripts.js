(function(){
    "use strict";
        document.write('<p>Ich komme aus JavaScript</p>');
        var elem = document.getElementsByTagName("p")[0];
        var color = elem.style.color;
        elem.style.color = 'blue';
})();