
var box = document.getElementById("boxDiv");
var paragraphs = document.getElementsByTagName("p");

box.classList.add("largeBox");
var offset = box.offsetWidth;
for(var i = 0; i < paragraphs.length; i++){
   paragraphs[i].style.width = offset  + 'px';
}