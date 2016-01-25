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
                        $(".ken-instructions").fadeIn(1000);
                    });
                }) 
            })
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
            {'left': '51.25rem'},
            500,
            function(){/*Ater animation is over put it back at the beginning */
                
                $(this).css('left', '23.625rem');
                $(this).hide();
            });
    })
    .mouseup(function(){// ryu goes back to his ready position
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });

    // Ryu animation
    $(document).keydown(function(event){
    	if (event.keyCode === 65){// a
    		playCool();
    		$(".ryu-action").hide();
    		$(".ryu-cool").show();
    	} else if ( event.keyCode === 83){// s
            $(".ryu-action").hide();
            $(".ryu-kick").show();
        } else if ( event.keyCode === 68){// d
            $(".ryu-action").hide();
            $(".ryu-punch").show();
            console.log("punch");
        } else if ( event.keyCode === 70) {// f
            $(".ryu-action").hide();
            $(".ryu-stepping-kick").show();
        }
    }).keyup(function(event){
    	if (event.keyCode === 65 || event.keyCode === 83 || event.keyCode === 68 || event.keyCode === 70) {
            $("#Toulouse-song")[0].pause();
            $("#Toulouse-song")[0].load();
            $(".ryu-action").hide();
            $(".ryu-ready").show();
        }
    });
//});

    // Ken animation 
    $(document).keydown(function(event){
        if (event.keyCode === 74){ // j 
            $(".ken-action").hide();
            $(".ken-standing-kick").show();
        } else if ( event.keyCode === 75){ // k
            playHadouken();
            $(".ken-action").hide();
            $(".ken-throwing-left").show();
            $('.hadouken-left').finish().show().animate( /*placement of beginning */
            {'right': '55rem'},
            500,
            function(){/*Ater animation is over put it back at the beginning */
                
                $(this).css('right', '22rem');
                $(this).hide();
            });
        } else if ( event.keyCode === 76) { // l
            $(".ken-action").hide();
            $(".ken-shinryuken").show();
        } else if ( event.keyCode === 186){ // ;
            $(".ken-action").hide();
            $(".ken-kick").show();
        }
    })
    .keyup(function(){// ken goes back to his ready position
        if ( event.keyCode === 74 || event.keyCode === 75 || event.keyCode === 76 || event.keyCode === 186){
            $('.ken-action').hide();
            $('.ken-left-stance').show();
        }
        
    });
