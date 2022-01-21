
var colorsPawns = ["blue", "red", "yellow", "green"];
var colorChoice = [];
var colorsPlayerChoice = [];
var round;

// function initialize() {
//     let buttons = document.getElementsByClassName("playerButton")
//     for (let button of buttons) {
//         button.addEventListener('click', playerChoice)
//     }
//     round = 0;
//     return
// }

// initialize();

function rndColorsChoice(arr1, arr2) {
    while (arr2.length < 4) {
        var rndColor = arr1[Math.floor(Math.random() * arr1.length)];
        arr2.push(rndColor);
    }
    return arr2;
}

function robotChoice() {
    rndColorsChoice(colorsPawns, colorChoice)
    console.log(colorChoice + " robot choice");
    return colorChoice;
}
robotChoice();

function playerChoice() {
    rndColorsChoice(colorsPawns, colorsPlayerChoice);
    console.log(colorsPlayerChoice + " player choice");
    round +=1;
    return colorsPlayerChoice;
}
playerChoice();

function colorAnalyse(colorChoice, colorsPlayerChoice) {
    var counterRightColor = 0;
    var counterRightPosition = 0;
    var robotTemporary = colorChoice;
    var playerTemporary = colorsPlayerChoice;
    for (let i = 0; i < robotTemporary.length; i++) {
        if (robotTemporary[i] === playerTemporary[i]) {
            counterRightPosition += 1;
        }
        for (let j = 0; j < playerTemporary.length; j++) {
            if (robotTemporary[i] === playerTemporary[j]) {
                counterRightColor += 1;
                robotTemporary.splice(robotTemporary[i], 1);
                playerTemporary.splice(playerTemporary[j], 1);
            }
        }
    }
    printResults();
    play();
    //console.log("right color:" + counterRightColor, "right position:" + counterRightPosition);
    return counterRightColor, colorsPlayerChoice;
}
colorAnalyse(colorChoice, colorsPlayerChoice);

function play(){
    if(colorsPlayerChoice != 0 &&  colorChoice === colorsPlayerChoice){
        alert("YOU WIN!")
    } else if (round === 10){
        alert("YOU LOSE, LOOOOOOOOSER ! 💩 ")
    } else {
        counterRightColor = 0;
        counterRightPosition = 0;
        playerChoice()
    }
}

play()

function printResults(){
    if(counterRightPosition != 0){
        alert("red")
    } else if( counterRightColor != 0){
        counterRightColor -= counterRightPosition;
        alert("white")
    }
}