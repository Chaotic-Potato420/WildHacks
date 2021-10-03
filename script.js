var a = document.getElementById("one");
var b = document.getElementById("home");
var c = document.getElementById("wrens");
var d = document.getElementById("sparrows");
var e = document.getElementById("hummers");
var f = document.getElementById("finches");

var wren = 0;
var sparrow = 0;
var hummer = 0;
var finch = 0;

window.onload = function(){
    c.style.display = "none";
    d.style.display = "none";
    b.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
    wren = 0;
    sparrow = 0;
    hummer = 0;
}

function wrens(){
    a.style.display = "none";
    c.style.display = "flex";
    b.style.display = "flex";
}
function w1(){
    wren +=1;
    window.location.replace("wren.html");
    localStorage.setItem("vOneLocalStorage", wren); 
}
function w2(){
    wren +=2;
    window.location.replace("wren.html");
    localStorage.setItem("vOneLocalStorage", wren); 
}
function sparrows(){
    a.style.display = "none";
    c.style.display = "none";
    d.style.display = "flex";
    b.style.display = "flex";
}
function s1(){
    sparrow +=1;
    window.location.replace("sparrow.html");
    localStorage.setItem("vTwoLocalStorage", sparrow); 
}
function s2(){
    sparrow +=2;
    window.location.replace("sparrow.html");
    localStorage.setItem("vTwoLocalStorage", sparrow); 
}

function hummers(){
    a.style.display = "none";
    c.style.display = "none";
    e.style.display = "flex";
    b.style.display = "flex";
}
function h1(){
    hummer +=1;
    window.location.replace("humming.html");
    localStorage.setItem("vThreeLocalStorage", hummer); 
}
function h2(){
    hummer +=2;
    window.location.replace("humming.html");
    localStorage.setItem("vThreeLocalStorage", hummer); 
}

function finches(){
    a.style.display = "none";
    c.style.display = "none";
    f.style.display = "flex";
    b.style.display = "flex";
}
function f1(){
    finch +=1;
    window.location.replace("finches.html");
    localStorage.setItem("vFourLocalStorage", finch); 
}
function f2(){
    finch +=2;
    window.location.replace("finches.html");
    localStorage.setItem("vFourLocalStorage", finch); 
}

function home(){
    a.style.display = "flex";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
    wren = 0;
    sparrow = 0;
    hummer = 0;
}

