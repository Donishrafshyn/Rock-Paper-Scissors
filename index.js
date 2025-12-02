const choices = ["rock","paper","scissors"];
const playerchoice = document.getElementById("playerchoice");
const computerchoice = document.getElementById("computerchoice");
const playerscore = document.getElementById("playerscore");

const computerscore = document.getElementById("computerscore");
const resultdisplay = document.getElementById("resultdisplay");
let playermark=0;
let computermark=0;

function playgame(play){
    const computerselect= choices[Math.floor(Math.random() * 3)];
    let result="";
    
    if(play==computerselect)
        {
            result="ITS'S A TIE";
            resultdisplay.textContent=result;
            playerchoice.textContent=`Player : ${play}`;
            computerchoice.textContent=`Computer : ${computerselect}`;
        }
    else if((play=="rock" && computerselect=="scissors") ||
            (play=="paper" && computerselect=="rock") ||   
            ( play=="scissors" && computerselect=="paper") )
            {
                result="YOU WIN";
                playermark++;
                resultdisplay.textContent=result;
                playerscore.textContent=playermark;

                playerchoice.textContent=`Player : ${play}`;
                computerchoice.textContent=`Computer : ${computerselect}`;
            }
    else{
        result="YOU LOSE";
        computermark++;
        computerscore.textContent=computermark;

        resultdisplay.textContent=result;
        playerchoice.textContent=`Player : ${play}`;
        computerchoice.textContent=`Computer : ${computerselect}`;
    }
    
}
