var vOneLS = localStorage.getItem("vOneLocalStorage");
var wren = vOneLS;

var a = document.getElementById("w1");
var b = document.getElementById("w2");
var c = document.getElementById("w3");
var d = document.getElementById("w4");

window.onload = function(){
    console.log(wren);
    if (wren == 1){
        a.style.display = "flex";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
    }else if (wren == 2){
        b.style.display = "flex";
        a.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
    }else if (wren == 3){
        c.style.display = "flex";
        b.style.display = "none";
        a.style.display = "none";
        d.style.display = "none";
    }else if (wren == 4){
        d.style.display = "flex";
        b.style.display = "none";
        c.style.display = "none";
        a.style.display = "none";
    }
}

function home(){
    window.location.replace("index.html");
}

//for slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}