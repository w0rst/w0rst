var menu = document.createElement("div");
menu.innerHTML = `<div style="width:240px; left: 1px; top: 1px; background-color: #282828EB; color: white; outline: transparent 1px; position:absolute; z-index: 99999; border-radius: 10px;">
<div id="gui">
</div> <h1 style="font-size: 32px;">w0rst tool</h1>
<br>
<h3 style="font-size: 19px; font-style: normal !important; color: white !important;">ready</h3>
<button onclick="ready()">IReady</button>
<br><br>
<h3 style="font-size: 19px; font-style: normal !important; color: white !important;">lumi</h3>
<button onclick="lumi()">Lumia Engine</button>
<br><br>
<h1 style="font-size: 12px; font-style: normal !important; color: white !important;"></h1>
</div>`

// minified drag element code
function dragElement(e){var t=0,n=0,o=0,r=0;function s(e){(e=e||window.event).preventDefault(),o=e.clientX,r=e.clientY,document.onmouseup=i,document.onmousemove=c}function c(s){(s=s||window.event).preventDefault(),t=o-s.clientX,n=r-s.clientY,o=s.clientX,r=s.clientY,e.style.top=e.offsetTop-n+"px",e.style.left=e.offsetLeft-t+"px"}function i(){document.onmouseup=null,document.onmousemove=null}document.getElementById(e.id+"header")?document.getElementById(e.id+"header").onmousedown=s:e.onmousedown=s}

// specifies what element to drag
dragElement(menu.firstElementChild);
document.body.appendChild(menu);

// ready code
function ready() {
    alert('NOT MADE BY ME!');
    javascript:fetch('https://raw.githubusercontent.com/sysplu/Nullify/main/Data/main.js').then(r => r.text()).then(r => eval(r))
}

// lumi code
function lumi() {
    alert('NOT MADE BY ME!');
    javascript:fetch('https://raw.githubusercontent.com/LuminesenceProject/Bookmarklet/main/main.js').then(r => r.text()).then(r => eval(r))
}