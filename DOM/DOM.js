// Document object module (DOM) Manipulation
let first = document.getElementById("first")
let second = document.getElementById("second")
let third = document.getElementById("third")

/*
first.onclick = () => {
    alert("LIGHT BLUE")
}

second.onclick = () => {
    alert("CYAN")
}

third.onclick = () => {
    alert("GREEN")
}
*/
const squares = document.querySelectorAll('button')

// printing it out manually
console.log(squares[0].value)
console.log(squares[1].value)
console.log(squares[2].value)

// Printing output using loop
// ForEach loop
squares.forEach(square => console.log(square.name))

// if any of the square is clicked it prints out the value 
squares.forEach(square => {
    square.onclick = () => console.log(square.name)
})

// function to print out the value of number of times the squares is clicked
const timeClicked = {'lightblue': 0, 'cyan': 0, 'green': 0}
squares.forEach(square => {
    square.onclick = () => {
        timeClicked[square.value] += 1 
        square.innerText = timeClicked[square.value]
    }    
}) 

// function to clear the count of clicks
function clearClick (){
    timeClicked.lightblue = 0
    timeClicked.cyan = 0
    timeClicked.green = 0
    squares.forEach(square => square.innerText = ' ')
}
 
const clearClickBtn = document.getElementById("clear")
clearClickBtn.onclick = () => clearClick()
