document.onreadystatechange = function () {
 		var state = document.readyState
 		if (state == 'interactive') {
      		//do nothing
 		} else if (state == 'complete') {
     		setTimeout(function(){
        		document.getElementById('interactive');
        		fade(document.getElementById('load'));
        		document.getElementById('contents').style.visibility="visible";},1000);
 		}
}

function fade(element) {
   	var op = 1;
   	var timer = setInterval(function () {
       	if (op <= 0.01){
           	clearInterval(timer);
           	element.style.display = 'none';
       	}
       	element.style.opacity = op;
       	element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      	op -= op * 0.1;
   	}, 50);
}