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
    
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

