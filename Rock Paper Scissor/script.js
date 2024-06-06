//Modular Programming

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
let msg = document.querySelector("#msg")
let msgContainer = document.querySelector(".msg-container")
let user_score = document.querySelector("#user-score")
let comp_score = document.querySelector("#comp-score")
let reset = document.querySelector(".reset-para")



const genCompChoice = () => {
    //Rock, Paper, Scissor
    const option = ["rock","paper","scissor"]
    const index = Math.floor(Math.random() * 3)

    return option[index]
} 


const drawgame = () => {
    msg.innerText = "Draw!"
    msgContainer.style.backgroundColor = "#081b31"
}

const showWinner = (userwin, userChoice, compChoice) => {

    if (userwin){
        userScore++
        user_score.innerText = userScore
        msg.innerText = `You Win! ${userChoice.toUpperCase()} beats ${compChoice.toUpperCase()}`
        msgContainer.style.backgroundColor = "green"
    }else {
        compScore++
        comp_score.innerText = compScore
        msg.innerText = `You Lose! ${compChoice.toUpperCase()} beats ${userChoice.toUpperCase()} `
        msgContainer.style.backgroundColor = "red"

    }
}

const playGame = (userChoice) => {
    console.log("User Choice is:",userChoice)

    //Generate Computer Choice
    const compChoice = genCompChoice();
    console.log("Computer Choice:", compChoice)

    //Draw Game
    if (userChoice === compChoice){
        drawgame()
    }

    else {
        let userWin = true
        if (userChoice === "rock"){
            //scissor, paper
            userWin = compChoice === "paper" ? false : true
        }

        else if (userChoice === "paper"){
            //rock, scissor
            userWin = compScore === "scissor" ? false : true
        }

        else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true
        }

        showWinner(userWin, userChoice, compChoice)
    }
}


choices.forEach((choice) => {
    console.log(choice)
    choice.addEventListener("click",() => {
        let userChoice = choice.getAttribute("id");
        console.log("Choice was Clicked!",userChoice)
        playGame(userChoice)
    })
})

reset.addEventListener("click",() => {
    userScore = 0
    user_score.innerText = userScore

    compScore = 0
    comp_score.innerText = compScore

    msg.innerText = "Play Your Move! Game Start!"
    msgContainer.style.backgroundColor = "#081b31"
})
