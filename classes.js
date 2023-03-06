// Classes
// Method
// you can only have method in classes

class car {
    constructor(name, color, topSpeed) {
        this.name           = name
        this.color          = color
        this.topSpeed       = topSpeed  
        this.currentSpeed   = 0
    }
    drive() {
        console.log('just drove 2 miles!')
        this.currentSpeed += 10
        console.log(`driving speed at ${this.currentSpeed} mph`)
    }
    brake() {
        console.log('braking!')
        this.currentSpeed -= 10

    }
    zeroToSixty() {
        setTimeout(() => {
            console.log('pHEW! that was fast')
            this.currentSpeed = 60
            console.log(this.currentSpeed)
        })
    }
    stop() {
        console.log('Coming to a screeching halt!')
        this.currentSpeed = 0
    }
}

const ferrari = new car('ferrari', 'red', 250)
console.log(ferrari)
ferrari.drive()
ferrari.brake()

console.log(ferrari.currentSpeed)
ferrari.drive()
console.log(ferrari.currentSpeed)
ferrari.drive()
ferrari.drive()
ferrari.drive()
ferrari.drive()
ferrari.brake()
ferrari.brake()
console.log(ferrari.currentSpeed)
ferrari.zeroToSixty()

