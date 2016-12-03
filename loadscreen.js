document.onreadystatechange = function () {
 		var state = document.readyState
 		if (state == 'interactive') {
      		//do nothing
 		} else if (state == 'complete') {
     		setTimeout(function(){
        		document.getElementById('interactive');
        		$("#load").fadeOut();
            $("#profile").addClass("animated zoomIn");
            $("#links").addClass("animated fadeInUp");
        		},1000);
 		}
}