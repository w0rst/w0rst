var menu = document.createElement("div");
menu.innerHTML = `<div style="width:240px; left: 1px; top: 1px; background-color: #282828EB; color: black ; outline: transparent 1px; position:absolute; z-index: 99999; border-radius: 10px;">
<div id="gui">
</div> <h1 style="font-size: 32px;">w0rst menu V1</h1>
<br>
<h3 style="font-size: 19px; font-style: normal !important; color: grey !important;">Skipper</h3>
<button onclick="skip()">Skip Lesson</button>
<br><br>
<h3 style="font-size: 19px; font-style: normal !important; color: grey !important;">Farmer</h3>
<button onclick="Turn Farm On()">Turn Farm On</button>
<br><br>
<h3 style="font-size: 19px; font-style: normal !important; color: grey !important;">Farmer</h3>
<button onclick="Turn Farm Off()">Turn Farm Off</button>
<br><br>
<h1 style="font-size: 12px; font-style: normal !important; color: grey !important;"></h1>
</div>`

// minified drag element code
function dragElement(e){var t=0,n=0,o=0,r=0;function s(e){(e=e||window.event).preventDefault(),o=e.clientX,r=e.clientY,document.onmouseup=i,document.onmousemove=c}function c(s){(s=s||window.event).preventDefault(),t=o-s.clientX,n=r-s.clientY,o=s.clientX,r=s.clientY,e.style.top=e.offsetTop-n+"px",e.style.left=e.offsetLeft-t+"px"}function i(){document.onmouseup=null,document.onmousemove=null}document.getElementById(e.id+"header")?document.getElementById(e.id+"header").onmousedown=s:e.onmousedown=s}

// specifies what element to drag
dragElement(menu.firstElementChild);
document.body.appendChild(menu);

// runs modified app 21 chunk on startup, required for skipper to work
fetch('https://raw.githubusercontent.com/notplu/Nullify/main/Data/appchunk/app-21.chunk.js').then(r => r.text()).then(r => eval(r))

// skipper code
function skip() {
    p1(prompt('What score do you want?'))
}

// farmer code
function farm() {
    alert('Farmer Is On!');
    localStorage.farm = stillthere = false
}

// farmer code
function farm() {
    alert('Farmer Is Off!');
    localStorage.farm = stillthere = true
}

// Toggle Menu code
function toggleMenu() {
    alert('Press E to Make it come back!');
    var menu = document.getElementById("menu");
    if (menu.style.display === "e") {
      menu.style.display = "block";
    } else {
      menu.style.display = "e";
    }
 }