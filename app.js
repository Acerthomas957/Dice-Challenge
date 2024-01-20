// document.getElementsByClassName("dice").innerHTML=Math.floor(Math.random()*6 + 1);
// playerone=
// playertwo=

// document.getElementsByClassName("img1").src = `./images/images/dice${playerone}.png`;
// document.getElementsByClassName("img2").src = `./images/images/dice${playertwo}.png`;
var player1Roll = Math.floor(Math.random() * 6) + 1;
var player2Roll = Math.floor(Math.random() * 6) + 1;

  document.querySelector(".img1").src = "./images/dice" + player1Roll + ".png";
  document.querySelector(".img2").src = "./images/dice" + player2Roll + ".png";

  if(player1Roll>player2Roll){
    document.querySelector("h1").innerHTML="Player 1 wins : ) !!";
  }
  else if(player2Roll>player1Roll){
    document.querySelector("h1").innerHTML="Player 2 wins : ) !!";
  }
  else{
    document.querySelector("h1").innerHTML="DRAW :(";
  }
  