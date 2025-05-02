var x = window.innerWidth;
var y = window.innerHeight;
var y2;
var scaley = 300;
var scaley2;
var posy;
var r = document.querySelector(':root');
var q = document.querySelector('#box1');

if(y<305){
    scaley = y - 10;
}

q.style.setProperty('height', `${scaley}px`);

document.getElementById("test").innerHTML = x;
document.getElementById("test2").innerHTML = y;

y2=y/2;
scaley2=scaley/2;
posy=y2-scaley2;

r.style.setProperty('--w', `${x}px`);
r.style.setProperty('--h', `${posy}px`);
r.style.setProperty('--x', `${scaley}px`);