//BUG REPORT
	// - safari is SO BROKEN :(
	// - get rid of cursor pointer when blurb is up ??
		
//solution
	//i have css transitions and jquery running in tandem
	//run them jquery -> css?
var flag = true; //if flag is up then the about blurb is down
$("#blurb").hide(); //so interaction will not be broken

//this jquery is so messy
$(document).on('click', function(e) { //on document click
    if ($(e.target).closest('#person').length) {
    	

    	$('#profile').stop().fadeTo(500, 1);
        $("#person").stop().fadeTo(300, 0);
        $('#contact').removeClass("flipInY");
        $('#contact').addClass("flipOutY");

    	setTimeout(function (){
    		$("#blurb").show();
    		$("#blurb").removeClass("zoomOut");
        	$("#blurb").addClass("zoomIn");
    	}, 300);
        flag = false;
    }else{
		$('#contact').removeClass("flipOutY");
    	$('#contact').addClass("flipInY");

    	$("#blurb").removeClass("zoomIn");
        $('#blurb').addClass("zoomOut");
        setTimeout(function() {
        $("#blurb").hide();
    	}, 300);
        flag = true;
    }
});

//so so messy
$("#contact").hover(function (){ //animation for hover on photo
	if (flag){
		$('#profile').stop().fadeTo(500, 0.2);
		$("#person").stop().fadeTo(300, 1);
		$("#person").removeClass("zoomOut");
		$("#person").addClass("zoomIn");
	}
}, function (){
	if (flag){
		$('#profile').stop().fadeTo(500, 1);
		$("#person").removeClass("zoomIn");
		$("#person").addClass("zoomOut");
	}
});

/*
$("#person").hover(function (){ //hover animation for icon
	if (flag){ $("#person").stop().fadeTo(300, 0.5); }
}, function(){
	if (flag){ $("#person").stop().fadeTo(300, 1); }
});
*/
var aboutButton = document.getElementById("person");

if (flag){
	aboutButton.style.cursor = "pointer";
}else{
	aboutButton.style.cursor = "wait"; //wtf
}