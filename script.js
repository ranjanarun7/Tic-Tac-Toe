let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetbtn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let nextBTN = document.querySelector(".nextBTN");
let turno = true;

const winningCondition = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];
let userchoice = prompt('Enter O or X?', "O");
console.log(userchoice);
/* while(userchoice!== "O" || userchoice!=="X"){
  alert("you Enter Invalid Input");
  userchoice = prompt('Enter O or X?', "O");
} */


boxes.forEach((box)=>{
  box.addEventListener("click", ()=>{
    if(turno){
      box.innerText = "O";
      turno = false;
    }
    else{
      box.innerText = "X";
      turno = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const showWinner = (winner)=>{
  boxes.forEach((box)=>{
    box.disabled = true;
  })
  console.log( winner);
  console.log(userchoice);
  if(winner===userchoice){
    msg.innerText = `Congratulations, You Win !`;
  }else{
    msg.innerText = `You Lose !`;
  }
  // msg.innerText = `Congratulations, Winnner is ${winner}`;
  msgContainer.classList.remove("hide");
};

const checkWinner = () => {
  for(let pattern of winningCondition){
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
      if(pos1Val === pos2Val && pos2Val === pos3Val){
        showWinner(pos1Val);
      }
    }
  }
}

newGameBtn.addEventListener("click",()=>{
  resetGame();
})

resetBtn.addEventListener("click",()=>{
  resetGame();
})

const resetGame = ()=>{
  userchoice = prompt('Enter O or X?', "O");
  console.log(userchoice);
  boxes.forEach((box)=>{
    box.innerText = "";
    msgContainer.classList.add("hide");
    box.disabled = false;
  })
}