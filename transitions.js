var flag = true; //if flag is up then the about blurb is down
var flag2 = false; //if about hover has been triggered before help
var flag3 = false; //universal hover flag
var flag4 = false; //check if hover has been triggered during help
$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors:["main","work"]
    });

    //some way to show that the hover exists.
    setTimeout(function(){
    	if (!flag2){
    		$("#help").fadeIn();
    		hoveron();
    		$("#contact").hover(function(){
    			$("#help").fadeOut();
    			flag4 = true
    		});
	    	setTimeout(function(){
	    		if (!flag4){
		    		$("#help").fadeOut();
		    		hoveroff();
		    	}
	    	}, 3000);
    	}
    }, 3000);
});

$("#blurb").hide(); //so interaction will not be broken

$(window).bind('hashchange', function(){
	if($("#mailpop").css('display') !== 'none'){
		$("#mailpop").fadeOut();
	}else{
		$("#mailpop").fadeIn();
	}
});

//jquery for about click
$(document).on('click touchstart', function(e) { //on document click
    if ($(e.target).closest('#person').length) {
    	$('#me').stop().fadeTo(500, 1);
        $("#person").stop().fadeTo(300, 0);
		$("#person").css("opacity", "0");
		$("#mail").stop().fadeTo(300, 0);
		$("#mail").css("opacity", "0");

        $('#contact').removeClass("flipInX");
        $('#contact').addClass("flipOutX");

    	setTimeout(function (){ //delay so there won't be z-clipping
    		$("#blurb").show();
    		$("#blurb").removeClass("zoomOut");
        	$("#blurb").addClass("zoomIn");
    	}, 300);
        flag = false;
        flag3 = true;
    }else{
		$('#contact').removeClass("flipOutX");
    	$('#contact').addClass("flipInX");

    	if (!flag) { //resetting animations after click
	    	$("#person").removeClass("zoomIn");
	    	$("#person").addClass("zoomOut");
	    	$("#mail").removeClass("zoomIn");
	    	$("#mail").addClass("zoomOut");
   		}

    	$("#blurb").removeClass("zoomIn");
        $('#blurb').addClass("zoomOut");
        flag3 = false;

        setTimeout(function() { //need to wait for other things to finish.
        	$("#blurb").hide();
        	flag = true;
    	}, 300);
    }
});

//functions for hover actions on contact photo
function hoveron(){
	flag3 = true;
	$('#me').stop().fadeTo(500, 0.2);
	$("#person").stop().fadeTo(300, 1);
	$("#person").css("opacity", "1");
	$("#mail").stop().fadeTo(300, 1);
	$("#mail").css("opacity", "1");

	$("#mail").removeClass("zoomOut");
	$("#mail").addClass("zoomIn");
	$("#person").removeClass("zoomOut");
	$("#person").addClass("zoomIn");
}

function hoveroff(){
	flag3 = false;
	$('#me').stop().fadeTo(500, 1);
	$("#person").stop().fadeTo(300, 0);
	$("#person").css("opacity", "0");
	$("#mail").stop().fadeTo(300, 0);
	$("#mail").css("opacity", "0");

	$("#mail").removeClass("zoomIn");
	$("#mail").addClass("zoomOut");
	$("#person").removeClass("zoomIn");
	$("#person").addClass("zoomOut");
}

$("#contact").hover(function (){ //animation for hover on photo
	if (flag && !flag3){
		flag2 = true;
		hoveron();
	}
}, function (){
	if (flag){
		hoveroff();
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
