$(document).ready(function(){
    playTheme();
    $('.ryu').mouseenter(function(){
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-still').show();
        $('.ryu-ready').hide();
    })
    .mousedown(function(){
        playHadouken();// play song 
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate( /*placement of beginning */
            {'left': '1020px'},
            500,
            function(){/*Ater animation is over put it back at the beginning */
                $(this).hide();
                $(this).css('left', '520px');
            });
    })
    .mouseup(function(){// ryu goes back to his ready position
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });

    $(document).keydown(function(event){
    	if (event.keyCode == 88){
    		playCool();
    		$(".ryu-action").hide();
    		$(".ryu-cool").show();
    	}
    }).keyup(function(event){
    	if (event.keyCode == 88)
    	$("#Toulouse-song")[0].pause();
    	$("#Toulouse-song")[0].load();
    	$(".ryu-cool").hide();
    	$(".ryu-still").show();
    })


});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}

 
var techno = false;
function playCool () {
    techno = !techno;
 	 if (techno == true) {
   		$('#intro-theme')[0].pause();
    	//$('#cool')[0].load()   // what is this for?
        $('#Toulouse-song')[0].volume = 0.5;
       //('#Toulouse-song')[0].play();
   	    $('#Toulouse-song')[0].play();
 	 }
}


var theme = false;
function playTheme (){
	theme = !theme;
	if (theme == true){
		$("#intro-theme")[0].play();
	}
}  