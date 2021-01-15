









/*
Add click event listener where we will provide logic that updates the button text
*/
$(".start").click(function () {
  var $this = $(this);
  var counter = 90;
  var interval = setInterval(function () {
    counter--;
    // Display 'counter' wherever you want to display it.
    if (counter <= 0) {
      console.log("Timer --> " + counter);
      clearInterval(interval);
      $(".countdown").html(
        "<h2><i class='fas fa-hourglass-half'></i>Time's up!</h2>"
      );
      return;
    } else {
      /*
  Update the text of the button to toggle beween "Start" and "Reset" when clicked
  */
      $this.text("RESET GAME");
      $(".countdown-timer").text(counter);
      console.log("Timer --> " + counter);
    }
  }, 1000);
});
/*
when($(".card-image:hidden").length === 0)
    // Change text and class of start button
    $(".start").onclick().removeClass('start').addClass('reset').text('RESET');
    

when time is up change button to start   Also, lock board when two cards are open
when all cards are matched (before time's up) stop the timer and switch the reset button to start button
*/
// click cards to see the face
let lockBoard = false;
$(".card").click(function () {
  let cardImage = $(this).find(".card-image");

  if (!cardImage.is(":visible")) {
    cardImage.fadeIn(500);

    //check if one inside card-wrapper hasClass open, if so check if there's a match
    $(".card-image")
      .not(cardImage)
      .not(".matched")
      .each(function () {
        if ($(this).is(":visible")) {
          if ($(this).attr("src") === cardImage.attr("src")) {
            $(this).addClass("matched");
            cardImage.fadeIn(500).addClass("matched");
            if ($(".card-image:hidden").length === 0) {
              //show alert YAY YOU DID IT! or something..
              console.log("yay!");
            }
          } else {
            $(this).fadeOut(2000);
            cardImage.fadeOut(1500);
          }
        } else {
        }
      });

    //loooooooop
    //if they are a match, addClass matched   OBS!!!!! Kortet ska inte försvinna innan man klickat igen!
  } else if (cardImage.hasClass("matched")) {
    if ($(".card-image:hidden").length === 0) {
      console.log("yay!");
    }
  } else {
    cardImage.fadeOut(1500);
  }
});

     var gameSong = document.getElementById("gameSong"); 
     var playIcon = document.getElementById("playIcon"); 
     
     var isPlaying = false;
     

     
     function playAudio() { 
         gameSong.play(); 
         isPlaying = true;
         playIcon.src = "assets/media/pause.png";
     } 
     
     function pauseAudio() { 
         gameSong.pause();
         isPlaying = false;
         playIcon.src = "assets/media/play.png";
     } 
     function HandleAudio(){
       if(isPlaying == true){
         //Playing already Pause it
         pauseAudio();
       }else{
         //Play the music
         playAudio();
       }
    }

/*
$('.start')onclick('shuffle') {

}

$(document).ready(function(){
    $("#instructions").click(function(){
      $('.hidden').removeClass('.hidden');
    });
  });  */
