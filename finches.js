var vTwoLS = localStorage.getItem("vFourLocalStorage");
var finch = vTwoLS;

var a = document.getElementById("f1");
var b = document.getElementById("f2");

window.onload = function(){
    console.log(finch);
    if (finch == 1){
        a.style.display = "flex";
        b.style.display = "none";
    }else if (finch == 2){
        b.style.display = "flex";
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