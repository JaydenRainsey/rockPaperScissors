// User enters name with prompt, stored in a variable
let userName = prompt("Enter your name: ");

// Display welcome message
alert("Welcome to Rock-Paper-Scissors, " + userName);

// Computer's choice from an array
let cpuArray = ["ROCK", "PAPER", "SCISSORS"]
let randomChoice = cpuArray[Math.floor(Math.random() * cpuArray.length)];
alert(randomChoice);
