// Function To select A Ramdom Number from a array
const randomFruit = (Fruits) => {
    const randomNumber = Math.floor(Math.random() * Fruits.length)
    console.log(randomNumber)
    return Fruits[randomNumber]
}

let Fruits = ['🥯','🍐','🥭','🍋','🌶','🌽','🍆','🍒','🍓','🍅','🍑','🍐','🍏','🍍','🥭','🍎','🍌','🍉','🍈','🍇']
console.log(randomFruit(Fruits))

// mini weather app
const weatherScore = (weather) => {
    let score

    if (weather == 'rainy' ) {
        score = 1
    }else if (weather == 'sunny'){
        score = -1
    }else {
        score = 0
    }

    return score
}
let weather = prompt("How is the weather")
console.log(weatherScore(weather))