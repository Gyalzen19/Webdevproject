let compscore = 0;
let userscore = 0;

const userscoring =document.querySelector("#your-score");
const compscoring =document.querySelector("#comp-score");


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const gencomputerchoice = ()=> {
const options=["rock","paper","scissor"];
const randIdx=Math.floor(Math.random()*3);
return options[randIdx];
};
const showWinner =(userWin)=>{
if(userWin){
    userscore++;
    userscoring.innerHTML=userscore;
    console.log("you win")
    msg.innerHTML="you won Bruh!!!!";
    msg.style.backgroundColor="green";
}else{
    compscore++;
    compscoring.innerHTML=compscore;
    console.log("computer won");
    msg.innerHTML="You lost no worries";
    msg.style.backgroundColor="red";
}
}
const drawgame = ()=>{
        msg.innerHTML="It's a draw";
        msg.style.backgroundColor="yellow";
       
}
const playgame = (userchoice)=>{
console.log("user choice",userchoice);
const compchoice=gencomputerchoice();
console.log("comp choice=", compchoice);
if(userchoice==compchoice){
    drawgame();
}else{
    let userWin=true;
    if(userchoice==="rock"){
        userWin = compchoice==="paper" ? false :true;
        
    }else if(userchoice==="paper"){
        userWin= compchoice==="scissor" ? false :true;
       }else{
        userWin = compchoice==="rock"?false:true;
       }
       showWinner(userWin);
}
};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
    playgame(userchoice)
            }); 
    });