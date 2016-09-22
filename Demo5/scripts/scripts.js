var box = document.getElementById("boxDiv");
var paragraphs = document.getElementsByTagName("p");

box.classList.add("largeBox");

for(var i = 0; i < paragraphs.length; i++){
   paragraphs[i].style.width = box.offsetWidth + 'px';
}