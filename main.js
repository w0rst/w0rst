var menu = document.createElement("div");
menu.innerHTML = `<div style="width:240px; left: 1px; top: 1px; background-color: #a3a9e8; color: white ; outline: transparent 1px; position:absolute; z-index: 99999; border-radius: 10px;">
<div id="gui">
</div> <h1 style="font-size: 32px;">planktif V1</h1>
<br>
<h3 style="font-size: 19px; font-style: normal !important; color: transparent !important;">skipper</h3>
<button onclick="skipper()">Skip Lesson</button>
<br><br>
<h3 style="font-size: 19px; font-style: normal !important; color: transparent !important;">farm</h3>
<button onclick="farm()">Turn Farmer On</button>
<br><br>
<h3 style="font-size: 19px; font-style: normal !important; color: transparent !important;">farmoff</h3>
<button onclick="farmoff()">Turn Famer Off</button>
<br><br>
<h1 style="font-size: 12px; font-style: normal !important; color: transparent !important;"></h1>
</div>`

// minified drag element code
function dragElement(e){var t=0,n=0,o=0,r=0;function s(e){(e=e||window.event).preventDefault(),o=e.clientX,r=e.clientY,document.onmouseup=i,document.onmousemove=c}function c(s){(s=s||window.event).preventDefault(),t=o-s.clientX,n=r-s.clientY,o=s.clientX,r=s.clientY,e.style.top=e.offsetTop-n+"px",e.style.left=e.offsetLeft-t+"px"}function i(){document.onmouseup=null,document.onmousemove=null}document.getElementById(e.id+"header")?document.getElementById(e.id+"header").onmousedown=s:e.onmousedown=s}

// specifies what element to drag
dragElement(menu.firstElementChild);
document.body.appendChild(menu);

// runs modified app 21 chunk on startup, required for skipper to work
javascript:fetch('https://raw.githubusercontent.com/notplu/Nullify/main/Data/appchunk/app-21.chunk.js').then(r => r.text()).then(r => eval(r))

// skipper code
function skipper() {
    p1(prompt('What score do you want?'))
}

// farm code
function farm() {
    alert('Farmer Is On!');
    localStorage.farm = stillthere = false
}

// farmoff code
function farmoff() {
    alert('Farmer Is Off!');
    localStorage.farm = stillthere = true
}