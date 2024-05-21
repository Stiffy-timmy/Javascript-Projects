
// Accessing the elements
let boxes = document.querySelectorAll(".box") // Gives an Array of all boxes from html doc
let resetBtn = document.querySelector(".reset")
let newGameBtn = document.querySelector(".new-game")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector(".msg")


console.log(typeof(boxes))

//MAIN_BODY
let turnO = true; // PLayerX, PLayerO

//Winning condition patterns 2D-Array (nested-list)
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


//EVENT_LISTENERS
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
        
        if (turnO){
            box.innerText = "O"
            turnO = false
        }
        
        else{
            box.innerText = "X"
            turnO = true
        }
        
        box.disabled = true
        
        checkwinner()
    })
})


//FUNCTIONS
const resetGame = () => {
    turnO = true;
    enableBoxes()
    msgContainer.classList.add("hide")
}

const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true
    }
}

const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false
        box.innerText = ""
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`
    msgContainer.classList.remove("hide")
    disableBoxes()
}

const checkwinner = () => {
    for (let pattern of winPatterns){
        let pos1value = boxes[pattern[0]].innerText
        let pos2value = boxes[pattern[1]].innerText
        let pos3value = boxes[pattern[2]].innerText
        
        if (pos1value != "" && pos2value != "" && pos3value != ""){
            if (pos1value === pos2value && pos2value === pos3value){
                console.log("Winner",pos1value)
                showWinner(pos1value)
            }
        }
    }
}

newGameBtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame)



//WHEN WE DID .querySelectorAll() THE ELEMENTS FROM HTML DOC ARE GETTING STORED IN THE FORM OF ARRAYS INSIDE VARIABLE (boxes)
// let num = 1;
// boxes.forEach((box) => {
//     console.log(`This is Box number ${num}`)
//     num++;
// })
