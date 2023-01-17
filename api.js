// API stands for application Programming Interface and it lets your app communicate with other services to fetch data
// .then() - promises
// asynchronous programming
// https://dog.ceo/api/breeds/image/random 
// To get random dog images
fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => console.log(json))