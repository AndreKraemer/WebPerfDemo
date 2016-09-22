var globalID;

function repeatOften() {
  var d = document.createElement("div");
  d.classList.add("box");
  var outer = document.getElementById("container");
  outer.appendChild(d);
  globalID = requestAnimationFrame(repeatOften);
}



document.getElementById("stopButton").addEventListener("click", function(){
    cancelAnimationFrame(globalID);
});

document.getElementById("startButton").addEventListener("click", function(){
    globalID = requestAnimationFrame(repeatOften);
});