window.onload = randPicture;

var profile = new Array("img/waterfall.png", "img/mountain.png", "img/waterski.png");

function randPicture() {
     randomNum = Math.floor(Math.random() * profile.length);
     document.getElementById("profile").src = profile[randomNum];
 }