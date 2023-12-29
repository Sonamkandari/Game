let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#Reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turnO=true;//player x,playerO
let count=0;
//2d array
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const restGame=()=>{
    true0=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");

};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO===true){
            //player o
            box.innerText="o";//VALUE Assign kar di
            turnO=false;// next time k lie false set kar di

        }else{
            //player x
            box.innerText="x";// else case k liye b value assign kar di
            turnO=true// next time k liye true set kar di
            
        }
        box.disabled=true;//to dissabled the button
        count++;
        let isWinner=checkWinner();// this functon will check the winner
        if(count===9&&!isWinner){
            GameDraw();
        }

    });
});
const GameDraw=()=>{
    msg.innerText='It is a Draw';
    msgContainer.classList.remove("hide");
    disableBoxes();

};

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
    

};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }

};
const showWinner=(winner)=>{
    msg.innerText='Congratulayions,winner is ${winner}';
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner=()=>{
    for(let pattern of winPatterns){
        
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;

    if(pos1val!=""&&pos2val!=""&&pos3val!=""){
      if(pos1val===pos2val&&pos2val===pos3val){
        showWinner(pos1val);
        return true;
      }

    }
  }
};

newGameBtn.addEventListener("click",restGame);
Reset-Btn.addEventListener("click",restGame);
