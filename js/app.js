$(document).ready(function(){
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
    		ryuCool();
    		$(".ryu-action").hide();
    		$(".ryu-cool").show();
    	}
    }).keyup(function(event){
    	if (event.keyCode == 88)
    	$(".ryu-cool").hide();
    	$(".ryu-still").show();
    })


});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}

 function ryuCool() {
	console.log("success you dousche");
	}