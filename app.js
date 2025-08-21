let userScore = 0;
let compScore = 0;
const msg = document.querySelector('.result-message');
const color = document.querySelector('.result');
const userScoreDisplay = document.getElementById('userScore');
const compScoreDisplay = document.getElementById('computerScore');
const userChoiceDisplay = document.getElementById('userChoicep');
const compChoiceDisplay = document.getElementById('computerChoicep');
const choices = document.querySelectorAll('.game-image');

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});

function genCompChoice() {
    const options = ['rock', 'paper', 'scissor'];
    return options[Math.floor(Math.random() * options.length)];
}

function playgame(userChoice) {
    const compChoice = genCompChoice();

    userChoiceDisplay.innerHTML = `Your Choice: <u>${userChoice}`;
    compChoiceDisplay.innerHTML = `Computer's Choice: <u>${compChoice}`;

    if (compChoice === userChoice) {
        msg.innerHTML = "It's a tie! 🤝";
        color.style.backgroundColor = "rgba(255, 172, 18, 0.925)";
        color.style.color = "black";
    } else if (
        (compChoice === 'rock' && userChoice === 'scissor') ||
        (compChoice === 'paper' && userChoice === 'rock') ||
        (compChoice === 'scissor' && userChoice === 'paper')
    ) {
        compScore++;
        msg.innerHTML = "Computer wins! 😢";
        color.style.backgroundColor = "red";
        color.style.color = "white";
    } else {
        userScore++;
        msg.innerHTML = "You win! 🎉";
        color.style.backgroundColor = "green";
        color.style.color = "white";
    }

    userScoreDisplay.innerText = `User: ${userScore}`;
    compScoreDisplay.innerText = `Computer: ${compScore}`;
}

