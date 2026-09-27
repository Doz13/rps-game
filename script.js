function getcomputerchoice (){
const random = Math.floor(Math.random()*3);
if (random === 0) return "rock";
if (random === 1) return "paper";
return "scissors";
}

function HumanChoice(){
    let choice = prompt("Enter rock,paper, or scissors:")

    if (choice === null) {
        return null
    }

    choice = choice.trim().toLowerCase();

    while (choice !== "rock" && choice !== "paper" && choice !== "scissors"){
        choice = prompt("invalid choice! please enter rock,paper,or scissors:");
        if (choice=== null) {
            return null;
        }
        choice = choice.trim().toLowerCase();

    }
    return choice;
}


let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice,computerChoice){
    const humanChoices = humanChoice.toLowerCase();

    if(humanChoice === computerChoice){
        console.log('its a tie');
    return;
    }

    if(
        (humanChoice === "rock" && computerChoice === "scissors")||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log('you win');
    } else {
        computerScore++;
        console.log('you lose!');
    }
}

function playGame (){

for (let i = 0; i <5; i++){
const humanSelection = HumanChoice();
const computerChoice = getcomputerchoice();

playRound(humanSelection,computerChoice);

console.log(`score-> Human: ${humanScore}, computer: ${computerScore}`);
}

if (humanScore > computerScore){
    console.log("you win the game!");
} else if (humanScore < computerScore){
    console.log("you lose!");
} else {
    console.log("its a tie");
}

}

playGame();