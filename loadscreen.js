$("#profile").hide();
document.onreadystatechange = function () {
 		var state = document.readyState
 		if (state == 'interactive') {
      		//do nothing
 		} else if (state == 'complete') {
     		setTimeout(function(){
        		document.getElementById('interactive');
        		$("#profile").show();
        		$("#load").fadeOut();
            	$("#profile").addClass("animated zoomIn");
            	$("#links").addClass("animated fadeInUp");
                $("#arrow").addClass("animated fadeInUp")
                setTimeout(function(){
                    $("#arrow").removeClass("fadeInUp");
                    $("#arrow").addClass("animated bounce");
                },800);
        		},1000);

 		}
}
