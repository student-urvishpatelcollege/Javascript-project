let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector('#msg');

const userScorePara = document.querySelector('#user-score')
const compScorePara = document.querySelector('#comp-score')

const genCompChoice = () => {
    const option = ["rock", "paper", "scissor"];
    const ranIdx = Math.floor(Math.random() * 3);
    return option[ranIdx];
}

const drawGame = () => {
    msg.innerText = "game was draw, play again!";
}
const showWinner = (userWin, compChoice, userChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
    } else {
        compScore++; // <-- fixed this line
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${userChoice} beats your ${compChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    // generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // scissor paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock scissor
            userWin = compChoice === "scissor" ? false : true;
        } else {
            // rock paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    // console.log(choice);
    const userChoice = choice.getAttribute("id");
    choice.addEventListener("click", () => {
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});