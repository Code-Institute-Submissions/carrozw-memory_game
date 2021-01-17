//define variables and get DOM element
let cardWrapper = document.querySelector(".card-wrapper");
let scoreAmount = document.querySelector(".score-amount");
let flippedAmount = document.querySelector(".flipped-amount");
let startGame = document.querySelector(".start-game");

let isPlaying;
let cardsSelected = [];
let cardsMatched = 0;
let clickAmount = 0;

//define cards
let imgArray = [
  { img: "assets/images/1.png" },
  { img: "assets/images/1.png" },
  { img: "assets/images/2.png" },
  { img: "assets/images/2.png" },
  { img: "assets/images/3.png" },
  { img: "assets/images/3.png" },
  { img: "assets/images/4.png" },
  { img: "assets/images/4.png" },
  { img: "assets/images/5.png" },
  { img: "assets/images/5.png" },
  { img: "assets/images/6.png" },
  { img: "assets/images/6.png" },
  { img: "assets/images/7.png" },
  { img: "assets/images/7.png" },
  { img: "assets/images/8.png" },
  { img: "assets/images/8.png" },
];

$(document).ready(function(){
  //RUN FUNCTIONS ON DOC READY
  createBoard(cardWrapper, imgArray);
  randomCards();
  startGame.addEventListener("click", reset);

});

//FUNCTIONS
function createBoard(cardWrapper, imgArray) {
    imgArray.forEach((arr, index) => {
    let col3 = document.createElement("div");
    col3.className = "col-3";
    let card = document.createElement("div");
    card.className = "card";
    let img = document.createElement("img");
    img.setAttribute("src", "assets/images/0.jpeg");
    img.setAttribute("data-id", index);
    cardWrapper.appendChild(col3);
    col3.appendChild(card);
    card.appendChild(img);
    //add turncard click eventlistener
    img.addEventListener("click", turnCard);
  });
}

function randomCards() {
    imgArray.sort(() => 0.5 - Math.random());
}

function turnCard() {
  //get selected card
  let thisCard = this.dataset.id;
  let thisImg = imgArray[thisCard].img;
  cardsSelected.push(thisImg);
  
  this.setAttribute("src", imgArray[thisCard].img);
  if (cardSelected.length === 2) {
    setTimeout(checkIfMatch, 500);
  }
}

function checkIfMatch() {
  //get images
  let imgs = document.querySelectorAll("img");
  let firstCard = cardSelected[0];
  let secondCard = cardSelected[1];

  //compare images if selected cards match
  if (cardsSelected[0] === cardsSelected[1] && firstCard !== secondCard) {
    cardsMatched += 1;
    scoreAmount.innerHTML = cardsMatched;
    setTimeout(checkIfWon, 500);
  } 
  //dont match
  else {
    imgs[firstCard].setAttribute("src", "assets/images/0.jpeg");
    imgs[secondCard].setAttribute("src", "assets/images/0.jpeg");
  }
  cardsSelected = [];
  clickAmount += 1;
  flippedAmount.innerHTML = clickAmount;
}
//check pairs matched with img array divided by 2
function checkIfWon() {
  if (cardsMatched == imgArray.length / 2) {
      //TODO add alert/modal to notify winner
    console.log("winner winner");
  }
}

// reset
function reset() {
  randomCards();
  cardWrapper.innerHTML = "";
  createBoard(cardWrapper, imgArray);
  cardsMatched = 0;
  clickAmount = 0;
  flippedAmount.innerHTML = 0;
  scoreAmount.innerHTML = 0;
}

// music for the page
function playAudio() {
  gameSong.play();
  isPlaying = true;
  playIcon.classList.remove = "fa-play";
  playIcon.className = "fas fa-pause";
}

function pauseAudio() {
  gameSong.pause();
  isPlaying = false;
  playIcon.className = "fas fa-play";
}
function HandleAudio() {
  if (isPlaying == true) {
    pauseAudio();
  } 
  else {
    playAudio();
  }
}