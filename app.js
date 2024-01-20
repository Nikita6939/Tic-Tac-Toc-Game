let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

const disableboxes=()=>{
    for (let box of boxes) {
        box.disabled=true;
    }
}

const enableboxes=()=>{
    for (let box of boxes) {
        box.disabled=false;
        box.innerText="";

    }
}

const showWinner=(winner)=>{
     msg.innerText=`Congratulation,winner is ${winner}`;
     msgContainer.classList.remove("hide");
     disableboxes();
}

const resetGame=()=>{
    turnO=true;
    enableboxes();
    msgContainer.classList.add("hide");
}
let turnO=true;

const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("btn was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    })
});

const checkwinner=()=>{
    for(pattern of winpattern){
      
        let positionvalue1=boxes[pattern[0]].innerText;
        let positionvalue2=boxes[pattern[1]].innerText;
        let positionvalue3=boxes[pattern[2]].innerText;

        if(positionvalue1!=""&& positionvalue2!=""&&positionvalue3!=""){
            if(positionvalue1===positionvalue2 && positionvalue2===positionvalue3){
                console.log("winner",positionvalue1);
                showWinner(positionvalue1);
            }
        }
 
        

    }
};

resetBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);


