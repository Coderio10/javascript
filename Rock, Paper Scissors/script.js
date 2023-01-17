// ROCK, PAPER, SCISSOR 

// getComputerChoice() randomly selects between `rock`, `paper`, `scissor` and returns that string
function getComputerChoice() {
    const Choices = ['Rock', 'Paper', 'Scissors'] 
    // Getting the ramdom number 
    const randomNumber = Math.floor(Math.random() * 3)
    // Return the random number
    return Choices[randomNumber]
} 

// Function getResult() compares playerChoice && computerChoice and return the score accondingly
// Human Wins - getResult('rock', 'scissors') = 1
// Human losses - getResult('scissors', 'Rock ') = -1
// Human Draws - getResult('rock', 'scissors') = 0
function getResult(playerChoice, computerChoice){
    // return the result of score based on if you won, drew, or lost 
    let score;
    // All situations where human draws, set `score` t0 0
    if(playerChoice == computerChoice){
        score = 0 
    }else if(playerChoice == 'Rock' && computerChoice == 'Scissors'){
        score = 1
    }else if(playerChoice == 'Paper' && computerChoice == 'Rock'){
        score = 1 
    }else if(playerChoice == 'Scissors' && computerChoice == 'Paper'){
        score = 1
    }else{
        score = -1
    }
    return score
}

// show results and updates the DOM
function showResult(score, playerChoice, computerChoice) {
    // selecting id's to show results from the html
    const resultDiv = document.getElementById('result')
    const handsDiv  = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')

    // conditions
    if (score == -1) {
        resultDiv.innerText = 'You Lost'
    }else if(score == 0){
        resultDiv.innerText = "It's a tie"
    }else{
        resultDiv.innerText = "You Won"
    }
     
    handsDiv.innerText = `you: ${playerChoice} Vs Computer: ${computerChoice}`
    playerScoreDiv.innerText = `Your Score: ${totalScore['playerScore']}` 
}

// function to calculate who won and show it on the screen 
function onClickRPS(playerChoice){
    //console.log({playerChoice})
    const computerChoice = getComputerChoice()
    //console.log({computerChoice})
    const score = getResult(playerChoice, computerChoice)
    totalScore['playerScore'] += score
    //console.log({score}) 
    //console.log(totalScore)
    showResult(score, playerChoice, computerChoice)
}

// Functions that Plays the Game
function playGame() {
    // select rock, paper, scissors button with the querySelector
    const buttons = document.querySelectorAll('.button')
    // buttons[0].onclick = () => console.log(buttons[0].value)

    // for each of the buttons do onClickRPS() function 
    buttons.forEach(button => {
        button.onclick = () => onClickRPS(button.value)
    })

    const endButton = document.getElementById('endBtn')
    endButton.onclick = () => endGame(totalScore) 
} 

// End Game
function endGame(totalScore) {
    // Setting Score to Zero
    totalScore['playerScore'] = 0
    totalScore['computerScore'] = 0
    //console.log(`Total Score:` + totalScore['playerScore'])

    // selecting id's to show results from the html
    const resultDiv = document.getElementById('result')
    const handsDiv  = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')

    // Clearing Value
        resultDiv.innerText = ''
        handsDiv.innerText = ""
        playerScoreDiv.innerText = ""
}

playGame()