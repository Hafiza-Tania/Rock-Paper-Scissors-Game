let userscore = 0;
let computerdcore = 0;
const choice = document.querySelectorAll(".box");
let msg=document.querySelector("#msg");
const userPara=document.querySelector("#user-score");
const compPara=document.querySelector("#score-comp")
const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"]
    const randomidx = Math.floor(Math.random() * 3);
    return options[randomidx];
}

const drawgame = () => {
    console.log("It's a tie");
    msg.innerText="It's a tie.Play Again!";
    msg.style.backgroundColor="#081b31";
}
const playgame = (userchoice) => {
    console.log("User choice was", userchoice);
    const computerchoice = genCompChoice();
    console.log("Computer choice was", computerchoice);
   
    let userwin = true;
    if (userchoice === computerchoice) {
        drawgame();
    }
    else if (userchoice === "rock" && computerchoice === "scissors") {
        console.log("You Win");
        msg.innerText=`You win! Your ${userchoice} beats ${computerchoice}`;
        msg.style.backgroundColor="Green";
        userwin = true;
        userscore++;
        userPara.innerText=userscore;

      
    }
    else if (userchoice === "paper" && computerchoice === "rock") {
        console.log("You Win");
        msg.innerText=`You win! Your ${userchoice} beats ${computerchoice}`;
        msg.style.backgroundColor="Green";
        userwin = true;
        userscore++;
        userPara.innerText=userscore;
       
    }
    else if (userchoice === "scissors" && computerchoice === "paper") {
        console.log("You Win");
        msg.innerText=`You win! Your ${userchoice} beats ${computerchoice}`;
        msg.style.backgroundColor="Green";
        userwin = true;
        userscore++;
        userPara.innerText=userscore;
        
    }
    else if (userchoice === "scissors" && computerchoice === "rock") {
        console.log("You lose");
        msg.innerText=`You Lose! ${computerchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="Red";
        userwin = false;
        computerdcore++;
        compPara.innerText=computerdcore;
        
    }
    else if (userchoice === "paper" && computerchoice === "scissors") {
        console.log("You lose");
        msg.innerText=`You Lose! ${computerchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="Red";
        userwin = false;
        computerdcore++;
        compPara.innerText=computerdcore;
       
    }
    else if (userchoice === "rock" && computerchoice === "paper") {
        console.log("You lose");
        msg.innerText=`You Lose! ${computerchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="Red";
        userwin = false;
        computerdcore++;
        compPara.innerText=computerdcore;
        
    }

}

choice.forEach((box) => {
    box.addEventListener('click', () => {
        const userchoice = box.getAttribute("id");
        playgame(userchoice);
    });
});