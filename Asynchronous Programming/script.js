// Asynchronous Programming

// Promise Exapple 1
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        isReady = [true, false][Math.floor(Math.random() * 2)]
        isReady ? resolve('Soup is ready') : reject('No Soup Today')
    }, 2000)

})

// console.log(
//     promise1
//     .then(success => console.log({success}))
//     .catch(error =>  console.log({error}))    
// ) 

// promise example 2
// console.log('fetch:', 
//     fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(data => console.log(data))

// )

// Async & Await
// rules:
// 1. you must create a function 
// 2. you must use the keyword async
// 3. use the word await

// Example 2 using async / await
const getDog = async () => {
    const url = 'https://dog.ceo/api/breeds/image/random'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}
// getDog()

// Example 1 using async / await
const getSoup = async () => {

    const data = {rating: 0, tip: 0, pay: 0, review: 0}

    try {
        const soup = await promise1
        console.log(soup)
        data.rating = 5
        data.tip = .2
        data.pay = 10
        data.review = 5
        return data
    } catch (error) {
        console.log(error)
        data.rating = 1
        data.tip = 0
        data.pay = 0
        data.review = 1 
        return data
    }
}
getSoup().then(value => console.log(value))

// Async Addition
const sum = async (a, b) => a+b
sum(1, 2).then(value => console.log(value))


