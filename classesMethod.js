// clasese Method

Array.prototype.myPush = function(item) {
    this[this.length] = item
    return this
}

const fruits = ['🍞','🥙','🥖','🥪','🧁','🥧','🍬']
fruits.myPush('🍞')
fruits.myPush('🥙')
fruits.myPush('🥖')
fruits.myPush('🥪')
console.log(fruits)