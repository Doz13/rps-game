const rockbtn = document.querySelector("#rock-btn")
const paperbtn = document.querySelector("#paper-btn")
const scissorsbtn = document.querySelector("#scissors-btn")
const resulttext = document.querySelector("#result-text")

const choices = ['rock','paper','scissors'];

function getcomputerchoice (){
const random = Math.floor(Math.random()*choices.length);
return choices[random]
}

function playRound (humanChoice){
    const computerselection = getcomputerchoice();

    if(humanChoice === computerselection){
        resulttext.textContent = `its a tie, you both chose ${humanChoice}.`;
    } else if(
        (humanChoice === "rock" && computerselection === "scissors")||
        (humanChoice === "paper" && computerselection === "rock") ||
        (humanChoice === "scissors" && computerselection === "paper")
    ) {
        resulttext.textContent = `you win, ${humanChoice} beat ${computerselection}`;
    } else {
        resulttext.textContent = `you lose, ${computerselection} beat ${humanChoice}`;
    }
}

rockbtn.addEventListener('click',() => playRound('rock'));
paperbtn.addEventListener('click',() => playRound('paper'));
scissorsbtn.addEventListener('click',() => playRound('scissors'));


