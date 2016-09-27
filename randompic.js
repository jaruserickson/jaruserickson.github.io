window.onload = randPicture;

var lib = new Array("img/hd/image-1.jpg","img/hd/image-2.jpg","img/hd/image-3.jpg","img/hd/image-4.jpg","img/hd/image-5.jpg","img/hd/image-6.jpg","img/hd/image-7.jpg","img/hd/image-8.jpg","img/hd/image-9.jpg","img/hd/image-10.jpg","img/hd/image-11.jpg","img/hd/image-12.jpg","img/hd/image-13.jpg");

function randPicture() {
     var randomNum = Math.floor(Math.random() * lib.length);
     document.getElementById("return").src = lib[randomNum];
     if (randomNum != 12) {
     	document.getElementById("return2").src = lib[randomNum+1];
     } else {
     	document.getElementById("return2").src = lib[randomNum-5];
     }
 }