//bug report
	//just css3's transform perspective blurring children problem

var flag = true; //if flag is up then the about blurb is down
$("#blurb").hide(); //so interaction will not be broken

//this jquery is so messy but hey, atleast i didnt just use html5up
$(document).on('click touchstart', function(e) { //on document click
    if ($(e.target).closest('#person').length) {
    	$('#me').stop().fadeTo(500, 1);
        $("#person").stop().fadeTo(300, 0);
		$("#person").css("opacity", "0");
        $('#contact').removeClass("flipInX");
        $('#contact').addClass("flipOutX");

    	setTimeout(function (){
    		$("#blurb").show();
    		$("#blurb").removeClass("zoomOut");
        	$("#blurb").addClass("zoomIn");
    	}, 300);
        flag = false;
    }else{
		$('#contact').removeClass("flipOutX");
    	$('#contact').addClass("flipInX");

    	if (!flag) {
    	$("#person").removeClass("zoomIn");
    	$("#person").addClass("zoomOut");
   		}

    	$("#blurb").removeClass("zoomIn");
        $('#blurb').addClass("zoomOut");

        setTimeout(function() { //need to wait for other things to finish.
        	$("#blurb").hide();
        	flag = true;
    	}, 300);
    }
});

//so so messy
$("#contact").hover(function (){ //animation for hover on photo
	if (flag){
		$('#me').stop().fadeTo(500, 0.2);
		$("#person").stop().fadeTo(300, 1);
		$("#person").css("opacity", "1");

		$("#person").removeClass("zoomOut");
		$("#person").addClass("zoomIn");
	}
}, function (){
	if (flag){
		$('#me').stop().fadeTo(500, 1);
		$("#person").stop().fadeTo(300, 0);
		$("#person").css("opacity", "0");

		$("#person").removeClass("zoomIn");
		$("#person").addClass("zoomOut");
	}
});

/*
$("#person").hover(function (){
	if (flag){ $("#person").stop().fadeTo(300, 0.5); }
}, function (){
	if (flag){ $("#person").stop().fadeTo(300, 1); }
});
*/

var aboutButton = document.getElementById("person");

if (flag){
	aboutButton.style.cursor = "pointer";
}else{
	aboutButton.style.cursor = "wait"; //wtf
}