let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-container")
let start = document.querySelector("#start");
let msg = document.querySelector("#msg");

let turnO = true; //playerX playerO
let count = 0; //To Track Draw


const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        //console.log ("Box was clicked");

       if(turnO){
        box.innerText = "O";
        box.style.color = "black"
        turnO = false;
       }else{
        box.innerText = "X";
        box.style.color = "red"
        turnO = true;
       }

       box.disabled = true;

       count++;
       
       let isWinner = checkWinner();
       if (count === 9 && !isWinner) {
        gameDraw();
       }
    });
});


const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};


const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};


const checkWinner = () =>{
    for(let pattern of winPatterns){
        //console.log(pattern[0], pattern[1], pattern[2]);

        //console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);

        //console.log(
        //    boxes[pattern[0]].innerText,
        //   boxes[pattern[1]].innerText,
        //    boxes[pattern[2]].innerText
        //);

        let pos1Vul = boxes[pattern[0]].innerText;
        let pos2Vul = boxes[pattern[1]].innerText;
        let pos3Vul = boxes[pattern[2]].innerText;

        if(pos1Vul != "" && pos2Vul != "" && pos3Vul != "" ){
            if(pos1Vul === pos2Vul && pos2Vul === pos3Vul){
                //console.log("winner", pos1Vul);
                showWinner(pos1Vul);
                return true;
            }
        }
    }
};


start.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);