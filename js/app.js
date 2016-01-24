function playHadouken() {
    $("#intro-theme")[0].pause();
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}

var techno = false; // why do this?
function playCool () {
    techno = !techno;
     if (techno == true) {
        $('#intro-theme')[0].pause();
        $('#Toulouse-song')[0].volume = 0.5;
        // $('#Toulouse-song')[0].load();
        $('#Toulouse-song')[0].play();
     }
}

function doIntro() {
  $(".action").hide();
  $('#intro-theme')[0].volume = 0.3;
  $('#intro-theme')[0].play();
  $('.st-logo').fadeIn(3500, function() {
    $(this).fadeOut(1000, function() {

      $('.combination').fadeIn(1500, function() {

        $(this).fadeOut(1000, function() {

          $('.jQuery-logo').fadeIn(1500, function() {

            $(this).fadeOut(1500, function() {

                $('.ken-vs-ryu').fadeIn(2000, function() {

                    $(this).fadeOut(1000, function() {

                        $('.ryu-ready').fadeIn(1000);
                        $('.ryu-instructions').fadeIn(1000);
                        $('.ken-left-stance').fadeIn(1000);
                    });
                }) 
            });
          })
        })
      })
    })
  })
}



//$(document).ready(function(){
    doIntro();
    $('.ryu').mouseenter(function(){
        $('.ryu-action').hide();
        $('.ryu-evil-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-action').hide();
        $('.ryu-ready').show();
    })
    .mousedown(function(){
        playHadouken();// play song 
        $('.ryu-action').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate( /*placement of beginning */
            {'left': '820px'},
            500,
            function(){/*Ater animation is over put it back at the beginning */
                $(this).hide();
                $(this).css('left', '378px');
            });
    })
    .mouseup(function(){// ryu goes back to his ready position
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });

    // Ryu animation
    $(document).keydown(function(event){
    	if (event.keyCode == 88){// x
    		playCool();
    		$(".ryu-action").hide();
    		$(".ryu-cool").show();
    	} else if ( event.keyCode === 75){// k
            $(".ryu-action").hide();
            $(".ryu-kick").show();
        } else if ( event.keyCode === 80){// p
            $(".ryu-action").hide();
            $(".ryu-punch").show();
            console.log("punch");
        } else if ( event.keyCode === 74) {// j
            $(".ryu-action").hide();
            $(".ryu-stepping-kick").show();
        }
    }).keyup(function(event){
    	if (event.keyCode === 88 || event.keyCode === 75 || event.keyCode === 80 || event.keyCode === 74) {
            $("#Toulouse-song")[0].pause();
            $("#Toulouse-song")[0].load();
            $(".ryu-action").hide();
            $(".ryu-ready").show();
        }
    });
//});

    // Ken animation 
    $(document).keydown(function(event){
        if (event.keyCode === 69){ // 69 = e 
            $(".action").hide();
            $(".ken-ready").show();
        } else if ( event.keyCode === 70){ // 70 = f 
            $(".action").hide();
            $(".ken-throwing").show();
            $('.hadouken').finish().show().animate( /*placement of beginning */
            {'left': '820px'},
            500,
            function(){/*Ater animation is over put it back at the beginning */
                $(this).hide();
                $(this).css('left', '378px');
            });
        } 
    })
    .keyup(function(){// ken goes back to his ready position
        if ( event.keyCode === 69 || event.keyCode === 70){
            $('.ken-throwing').hide();
            $('.ken-ready').show();
        }
        
    });
