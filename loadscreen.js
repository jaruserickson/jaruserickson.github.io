document.onreadystatechange = function () {
 		var state = document.readyState
 		if (state == 'interactive') {
      		//do nothing
 		} else if (state == 'complete') {
     		setTimeout(function(){
        		document.getElementById('interactive');
        		$("#load").fadeOut();
            $("#profile").addClass("animated rotateInDownLeft");
            $("#links").addClass("animated fadeInUp");
        		},1000);
 		}
}