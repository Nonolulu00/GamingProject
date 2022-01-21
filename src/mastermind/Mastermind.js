
var colorsPawns = ["blue", "red", "yellow", "green"];
var colorChoice = [];
var colorsPlayerChoice=[];


// function initialize() {
//     let buttons = document.getElementsByClassName("playerButton")
//     for (let button of buttons) {
//         button.addEventListener('click', playerChoice)
//     }
//     return
// }

// initialize();

function rndColorsChoice(arr1,arr2){
    while(arr2.length<4){
        var rndColor = arr1[Math.floor(Math.random() * arr1.length)];
        arr2.push(rndColor);
    }
    return arr2;
}

function robotChoice(){
    rndColorsChoice(colorsPawns,colorChoice)
    console.log(colorChoice + " robot choice");
    return colorChoice;
}

robotChoice();

function playerChoice(){
    rndColorsChoice(colorsPawns,colorsPlayerChoice);
    console.log(colorsPlayerChoice + " player choice");
    return colorsPlayerChoice;
}

playerChoice();

// function comparison(colorChoice, colorsPlayerChoice){

// }

// comparison()

function colorAnalyse(colorChoice, colorsPlayerChoice){
    var counterRightColor= 0;
    var counterRightPosition = 0;
    var robotTemporary = colorChoice;
    var playerTemporary = colorsPlayerChoice;
    for(let i=0; i<robotTemporary.length; i++){
        if(robotTemporary[i] === playerTemporary[i]){
            counterRightPosition +=1;}
        for (let j=0; j<playerTemporary.length; j++){
            if(robotTemporary[i] === playerTemporary[j]) {
                counterRightColor+=1;
                robotTemporary.splice(robotTemporary[i],1);
                playerTemporary.splice(playerTemporary[j],1);
            }
        }
    }
    //console.log("right color:" + counterRightColor, "right position:" + counterRightPosition);
    return counterRightColor, colorsPlayerChoice;
}

colorAnalyse(colorChoice, colorsPlayerChoice);

function colorAtPosition(colorChoice, colorsPlayerChoice){
    counter2 = 0;
    for(let i=0; i<colorChoice.length; i++){
        if(colorChoice[i] === colorsPlayerChoice[i]){
            counter2 +=1;
        }
    }
    console.log(counter2);
    return counter2;
}

colorAtPosition(colorChoice, colorsPlayerChoice);