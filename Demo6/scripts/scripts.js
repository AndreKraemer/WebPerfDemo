
var stop = false;

function repeatOften() {
  var d = document.createElement("div");
  d.classList.add("box");
  var outer = document.getElementById("container");
  outer.appendChild(d);
  if(!stop){
     setTimeout(repeatOften, 2); 
  }
}



document.getElementById("stopButton").addEventListener("click", function(){
    stop = true;
});

document.getElementById("startButton").addEventListener("click", function(){
    repeatOften();
});