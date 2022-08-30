
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const computerImage = document.getElementById('computer-img');
const userImage = document.getElementById('player-img');
const resultTitle = document.getElementsByClassName('result-title')
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    changeImage();
    getResult();
    resultPrompt();
    tally();
    // showHistory();

} ))


function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    // console.log(randomNumber);


if (randomNumber === 1) {
    computerChoice = "rock"
}
if (randomNumber === 2) {
    computerChoice = "scissors"
}
if (randomNumber === 3) {
    computerChoice = "paper"
}

computerChoiceDisplay.innerHTML = computerChoice;
// userChoiceDisplay.innerHTML = computerChoice;
}

function changeImage() {
 if (computerChoice === "rock"){
    computerImage.setAttribute("src", "rock.gif"); 
 }   
 if (computerChoice === "paper"){
    computerImage.setAttribute("src", "paper.gif"); 
 }   
 if (computerChoice === "scissors"){
    computerImage.setAttribute("src", "scissor.gif"); 
 }   
 if (userChoice === "rock"){
    userImage.setAttribute("src", "rock.gif"); 
 }   
 if (userChoice === "paper"){
    userImage.setAttribute("src", "paper.gif"); 
 }   
 if (userChoice === "scissors"){
    userImage.setAttribute("src", "scissor.gif"); 
 }   
 
}


function getResult() {
    if (computerChoice === userChoice) {
        result =  " It's a draw!"
    }
    if (computerChoice === "rock" && userChoice === "paper") {
        result =  " You WIN!"
    }
    if (computerChoice === "rock" && userChoice === "scissors") {
        result =  " You LOST!"
    }
    if (computerChoice === "paper" && userChoice === "rock") {
        result =  " You LOST!"
    }
    if (computerChoice === "paper" && userChoice === "scissors") {
        result =  " You WIN!"
    }
    if (computerChoice === "scissors" && userChoice === "rock") {
        result =  " You WIN!"
    }
    if (computerChoice === "scissors" && userChoice === "paper") {
        result =  " You LOST!"
    }


    resultDisplay.innerHTML = result;
    
}



function resultPrompt() {
    const prompt = document.getElementById("result");
    alert("Computer picked " + computerChoice + "!" + prompt.innerHTML);
} 

function entrance() {
    alert("Are you feeling lucky? Go ahead! Take your pick!");
}

    let tallyScoreYou = document.getElementById("you").innerHTML;
    let tallyScoreDraw = document.getElementById("draw").innerHTML;
    let tallyScoreComputer = document.getElementById("computer").innerHTML;

function tally() {    
    if (resultDisplay.innerHTML == " You WIN!") {
        tallyScoreYou = Number(tallyScoreYou) + 1;
        document.getElementById("you").innerHTML = tallyScoreYou;
    }
    if (resultDisplay.innerHTML == " You LOST!") {
        tallyScoreComputer = Number(tallyScoreComputer) + 1;
        document.getElementById("computer").innerHTML = tallyScoreComputer;
    }
    if (resultDisplay.innerHTML == " It's a draw!") {
        tallyScoreDraw = Number(tallyScoreDraw) + 1;
        document.getElementById("draw").innerHTML = tallyScoreDraw;
    }
}

// function showHistory() {
//     let historyDisplay = document.getElementsByClassName("history-row");
//     historyDisplay.setAttribute("style", "display: block;");
// }    



