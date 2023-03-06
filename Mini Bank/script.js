const depositBtn    = document.getElementById("deposit")
const withdrawBtn   = document.getElementById("withdraw")
const amountUI      = document.getElementById("amount")
const balanceUI     = document.getElementById("balance")
const feedback      = document.getElementById("feedback")

//  My own solution
// class bank {
//     constructor (Balance){
//         this.Balance = Balance
//     }
//     deposit(amount) { 
//         this.Balance += amount
//     }
//     withdraw(amount) {
//         if (this.Balance > amount) {
//             this.Balance -= amount
//         } else if ( this.Balance - amount <= 0) {
//             feedback.innerText = 'Insufficient Funds'  
//             return
//         } else {
//             feedback.innerText = 'Insufficient Funds'  
//             return
//         }
//     }

// }

// const UBA = new bank(10)
// UBA.deposit(1000)

depositBtn.onclick = () => console.log('hi')
    // UBA.withdraw(amountUI.value)
    // balanceUI.value = `$${UBA.Balance}`
    // feedback.innerText = 'Debited'

// withdrawBtn.onclick = () => { alert('sjsdjdj')
//     UBA.withdraw(amountUI.value)
// }

function click2() {
    const amountUI      = document.getElementById("amount")
    UBA.deposit(amountUI.value)
}
// depositBtn.onclick = () => {
//     UBA.deposit(amountUI.value)
// }
