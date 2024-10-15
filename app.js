let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer= document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
// let main = document.querySelector(".main");
// let start = document.querySelectorAll(".start");

let count =0;

// let startBtn = document.querySelector("#start-btn");

// startBtn.addEventListener("click" ,() =>{
 
//        start.classList.add("hide");
//        main.classList.remove("hide"); 
    
// });

let turnO = true; //player O

const resetGame = () =>{
    count = 0;
    turnO =true;
    enableBoxes();
    msgContainer.classList.add("hide");

};
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const draw = () =>{
    msg.innerText = `Draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
 
        if(turnO){
            box.innerText = "O";
            box.style.color= "black";
            turnO=false;

        }
        else{
            box.innerText = "X";
            box.style.color= "blue";
            turnO = true;
        }
        box.disabled =true;
        count ++;
        let win = checkWinner();

        if(count == 9 && !win){
            draw();
        }
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    };
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    };
};
const showWinner = (winner) =>{
    msg.innerText = `Congratulations,  Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }

        }
        
    };
};

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);


