"use strict";
const prompt = require('prompt-sync')();
const getGesture = require('./gesture');
class Player {
    constructor(name) {
      this.score = 0;
      this.name = name;
    }

    chooseGesture(){
        console.log("Please select a number to choose your gesture. (0 = rock), (1 = paper), (2 = scissors), (3 = lizard), (4 = spock) ");
        var userInput = prompt();
        var userChoice;
        switch(userInput){
            case 0:
                userInput = getGesture.gesturesArray[0];
                console.log("You choose Rock");
            break;
            case 1:
                userInput = getGesture.gesturesArray[1];
                console.log("You choose Paper");
            break;
            case 2:
                userInput = getGesture.gesturesArray[2];
                console.log("You choose Scissors");
            break;
            case 3:
                userInput = getGesture.gesturesArray[3];
                console.log("You choose Lizard");
            break;
            case 4:
                userInput = getGesture.gesturesArray[4];
                console.log("You choose Spock");
            break;
            default:
                this.chooseGesture;
            return userInput;
        }

    }
      
}