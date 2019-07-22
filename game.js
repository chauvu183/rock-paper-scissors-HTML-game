var userScore =0;
var compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("com-score");

const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result > p");

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


function getComputerChoice(){
  const choice = ['rock','paper','scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choice[randomNumber];
}

function win(userChoice,compChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    result.innerHTML = "User wins: "+ userChoice + " cover " + compChoice;
    console.log("win");

}

function lose(userChoice,compChoice){
  compScore++;
  compScore_span.innerHTML = compScore;
  result.innerHTML = "Computer wins: " + compChoice + " cover " + userChoice;
  console.log("lose");
}

function draw(){
  result.innerHTML = "Its a Draw! No one wins"
  console.log("draw");

}

function game(userChoice){
    const compChoice = getComputerChoice();
    console.log(compChoice);
    switch (userChoice + compChoice) {
      case "rockscissors":
      case "paperrock":
      case "scissorspaper" :
        win(userChoice,compChoice);
        break;
      case "rockpaper":
      case "paperscissors":
      case "scissorsrock":
        lose(userChoice,compChoice);
        break;
      case "rockrock":
      case "scissorsscissors":
      case "paperpaper":
        draw();
        break;
    }
}

function main(){
rock_div.addEventListener('click',function(){
  console.log("Hey you click on the rock");
  game("rock");
})

paper_div.addEventListener('click',function(){
  console.log("Hey you click on the paper");
  game("paper");
})

scissors_div.addEventListener('click',function(){
  console.log("Hey you click on the scissors");
  game("scissors");
})
}

main();
