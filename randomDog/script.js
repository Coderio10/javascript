// API stands for application Programming Interface and it lets your app communicate with other services to fetch data
// .then() - promises
// asynchronous programming
// https://dog.ceo/api/breeds/image/random 
// To get random dog images

// stuffs you dont have to wait for 
console.log('Run 1st')

const dogImgDiv = document.getElementById('dogImage')
const dogbtn = document.getElementById('dogButton ')

const getnewdog = () => {
    // stuffs you have to wait for 
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
        console.log(json.message)
        dogImgDiv.innerHTML = `<img src=' ${json.message}' height=250 width=300 />`
    })    
}

dogbtn.onclick = () => getnewdog()
// stuffs you dont have to wait for 
console.log('Run 3rd')