console.log("hello world");
let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".btn");
let newGameBtn=document.querySelector(".newbtn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector(".winner")

let turnO= true;

let winPattren=[
     [0,1,2], 
     [0,3,4],
     [0,4,8],
     [1,4,7],
     [2,5,8],
     [2,4,6],
     [3,4,5],
     [6,7,8]
]
const resetGame=()=>{
    turnO=true;
    enableboxses();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was click");
      if(turnO===true){// plyer o trun
        box.innerHTML="O";
        turnO=false;
      }
      else{// player x turn
          box.innerHTML="X";
        turnO=true;
      }
      box.disabled=true;
      winnerCheck();
    });
});
const disableboxses=()=>{
for(let box of boxes){
    box.disabled=true;}}

    const enableboxses=()=>{
for(let box of boxes){
    box.disabled=false;
    box.innerHTML="";
}}

const showWinner=(winner)=>{
    msg.innerHTML=`Congrutolation,  winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxses();}


const winnerCheck=()=>{
    for( let pattren of winPattren){

     let pos1val=   boxes[pattren[0]].innerText;
      let pos2val=    boxes[pattren[1]].innerText;
       let pos3val=   boxes[pattren[2]].innerText;
    
       if(pos1val !="" && pos2val!="" && pos3val!=""){
        if(pos1val===pos2val&& pos2val===pos3val){
            console.log("wineer",pos1val);
            showWinner(pos1val);}
       }
     
    }};
    newGameBtn.addEventListener("click", resetGame);
    resetBtn.addEventListener("click", resetGame);