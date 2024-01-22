const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
 let initUser = 0;
 let initComp = 0;
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");


const genComputerChoice= () =>{
    let option=["rock","paper","scissors"];
    let i=Math.floor(Math.random() *3);//0 to 1 only
    return option[i];
};
const draw =() =>{
    console.log("game is draw");
    msg.innerText="Game Draw";
};
const showWinner =(userWin,compChoice,userChoice)=>
{
    if(userWin)
    {

        initUser++;
        userScore.innerText = initUser;
        msg.innerText= "You Win";
        console.log("You Win");
    }
    else{
        initComp++;
        compScore.innerText=initComp;
         msg.innerText= "You Lose";
    }

};

const playGame = (userChoice) =>{
    console.log("user-choice=",userChoice);
    const compChoice=genComputerChoice();
    console.log("comp-choice=",compChoice);

    if (userChoice == compChoice)
    {
        draw()
    }
    else{
        let userWin=true;
        if(userChoice === "rock")
        {
         userWin = compChoice === "paper"? false: true;

        }
        else if(userChoice === "paper")
        {
            userWin = compChoice == "scissor"?false:true;
        }
        else{
            userWin = compChoice == "rock"?false:true;
        }
        showWinner(userWin,compChoice,userChoice);
    }
    
};








choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");

        playGame(userChoice);
    });
});




