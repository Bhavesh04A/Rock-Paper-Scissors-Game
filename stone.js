let userscore=0;
let compscore=0;
// let resetbtn= document.querySelector("#resetbtn");


const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const  userScorePara= document.querySelector("#user-score");
const  compScorePara= document.querySelector("#comp-score");

// const resetGame=()=>{
//     turnO=true;
//     enableBoxes();
//     msgcontainer.classList.add("hide");
// }

const gencompChoice=()=>{
    const options =["rock","paper", "scissors"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
}

const drawgame=()=>{
    msg.innerText= "Game  was Draw. Play again.";
    msg.style.backgroundColor= "#081b31";

}

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userscore++;
        userScorePara.innerText= userscore;
        msg.innerText= `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor= "green";
    }else{
        compscore++;
        compScorePara.innerText= compscore;
        msg.innerText= `You Lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor= "red";

    }
    if(userscore===10){
        msg.innerText= "You Won the Game!" ;
        msg.style.backgroundColor= "green";
    }
    else if(compscore===10){
        msg.innerText= "Comp won the Game. You lost.";
        msg.style.backgroundColor= "red";
    }
}

const playGame=(userChoice)=>{
    const compChoice= gencompChoice();

    if(userChoice===compChoice){
        drawgame(); 
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin= compChoice=== "paper"? false:true;
        }else if(userChoice==="paper"){
            userWin= compChoice=== "scissors"? false:true;
        }else{
            userWin= compChoice=== "rock"? false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    })
});

// resetbtn.addEventListener("click", resetGame);