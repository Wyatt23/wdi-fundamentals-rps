////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

/* I was trying to use something like this but it wasn't doing the trick. 
I'm still learning. I did find another way to get the basic job done, however...

function getPlayerMove() {
    var move = getInput();
    if (move === null){
        return move;
    }else {
        return getInput();
    }
} */
var getPlayerMove = prompt("Please choose either 'rock', 'paper, or scissors");
var getComputerMove = Math.random();
    if (getComputerMove <.33) {
        getComputerMove = "rock"; 
    }
    else if(getComputerMove <= 0.66){
        getComputerMove = "paper";
    }
    else {
        getComputerMove="scissors";
    }


console.log ("Player said: " + getPlayerMove);
console.log ("Computer Said: " + getComputerMove);

var move1 = getPlayerMove; 
var move2 = getComputerMove;

function getWinner(move1, move2){
    if(move1===move2){
        return "Tie";
    }
    if(move1==="rock") {
         if (move2=== "scissors"){
            return "Player wins!";
        }
        else if (move2 === "paper"){
            return "Computer wins!";
        }
    }
    else if(move1==="paper"){
         if (move2==="rock"){
            return "Player wins!";
        }
        else{
            return "Computer wins!"; 
        }
    }
    else if(move1==="scissors"){
        if(move2==="paper"){
            return "Player wins!";
        }
        else{
            return "Computer wins!"; 
        }
    }
}
    console.log(getWinner(move1,move2));
    
    //I know this isn't how you wanted it but it was all I could do to make it work//
    
    function playToFive() {
    console.log ("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    if (playerWins>=5 || computerWins >=5){
       
    }
    /* to be continued. The function thing is beyond me at present, even with google and slack :(
    )
    
    // This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
  /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

