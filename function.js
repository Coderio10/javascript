// functions
// it has 1 arguement called  `name`
// it logs out lance to the console
/*
function sayMyName(name){
    //templetes literals
    greet = `hi ${name}, nice to meet you!`
    console.log(greet)
}
sayMyName('lance')


num = sum(1, 7);
console.log(num) 
*/
//start
function sum(a, b) {
    // return
    return a + b
}
function calculatefoodTotal(food, tip){
    const tippercentage = tip / 100;
    const tipamount = food * tippercentage;
    const total = sum(food, tipamount);
    return total
}
let food = Number(prompt('what is the food price'))
let tip = Number(prompt('what is the tip'))

console.log(calculatefoodTotal(food, tip))
//end
//Arrow Function =>
// with explicit return
const sumArrow = (a, b) => {
    return a + b
}
// with explicit
const sumArrow2 = (a, b) => a + b
 