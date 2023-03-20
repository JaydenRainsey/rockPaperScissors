// User enters name with prompt, stored in a variable
let userName = prompt("Enter your name: ");

// Display welcome message
alert("Welcome to Rock-Paper-Scissors, " + userName);

// Computer's random choice from an array function
function cpuChoice() {
    let cpuArray = ["ROCK", "PAPER", "SCISSORS"]
    let randomChoice = cpuArray[Math.floor(Math.random() * cpuArray.length)];
    return randomChoice;
}

function userChoice() {
    let yourChoice = prompt("Choose ROCK, PAPER, OR SCISSORS: ");
    yourChoice = yourChoice.toUpperCase();
    return yourChoice;  
}

let cpuPosition = cpuChoice();
let userPosition = userChoice();
alert("Your Pick: " + userPosition + " VS CPU's Pick: " + cpuPosition);

// Logic using conditional statements to address all 9 possible outcomes

//ROCK vs ROCK, vs PAPER, vs SCISSORS
if (userPosition == 'ROCK' && cpuPosition == 'ROCK') {
    alert("DRAW GAME");
}
else if (userPosition == 'ROCK' && cpuPosition == 'PAPER') {
    alert('YOU LOSE');
}
else if (userPosition == 'ROCK' && cpuPosition == 'SCISSORS') {
    alert('YOU WIN!');
}
//PAPER vs ROCK, vs PAPER, vs SCISSORS
else if (userPosition == 'PAPER' && cpuPosition == 'ROCK') {
    alert('YOU WIN!');
}
else if (userPosition == 'PAPER' && cpuPosition == 'PAPER') {
    alert('DRAW GAME');
}
else if (userPosition == 'PAPER' && cpuPosition == 'SCISSORS') {
    alert('YOU LOSE');
}
//SCISSORS vs ROCK, vs PAPER, vs SCISSORS
else if (userPosition == 'SCISSORS' && cpuPosition == 'ROCK') {
    alert('YOU LOSE');
}
else if (userPosition == 'SCISSORS' && cpuPosition == 'PAPER') {
    alert('YOU WIN!');
}
else if (userPosition == 'SCISSORS' && cpuPosition == 'SCISSORS') {
    alert('DRAW GAME');
}
