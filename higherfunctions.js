// higher functions of arrays
// map() - loops and returns and array
// filter() - loops and returns and array with matching conditions
// reduce()

// Map()
    // using map to double the value of elements in an array
    // [1, 2, 3, 4].map(number => console.log(number))
    let result = [1, 2, 3, 4].map(number => number * 2)
    console.log(result)

    // A function to double the value of elements in an array
    const doubleMap = (numbers) => {
        return numbers.map(number => number * 2)
    }
    console.log(doubleMap([1, 2, 3, 4]))

// Filter()
    const filter = (numbers, greaterThan) => {
        let result = []
        for (const number of numbers){
            if (number > greaterThan){
                result.push(number)
            }
        }
        return result
    }
    console.log(filter([1, 2, 3, 4, 5, 6, 7, 8], 3 ))
    // Using .filter() array method
    const nums = [1, 2, 3, 4, 5, 6, 7]
    console.log(nums.filter(num => num > 4 || num < 2))

    // Another Application of the filter method
    const actors = [
        {name: 'Code Rio', networth: 2000000000000},
        {name: 'Israel', networth: 10000000000},
        {name: 'pola', networth: 2000},
    ]
    // console.log(actors.filter(actor => actor.networth > 2000))
    let result2 = actors.filter(actor => actor.networth > 2000)
    console.log(result2)
    // Array method Join
    let names = result2.map(actor => actor.name).join(', ')

    // higherfunctions.innerHTML = `<h1>${names}</h1>`

//  Reduce()
    // It is used to add elements in an array. 
    // it loops and give you back the accumulator
    // reduce takes in afunction as an arguement

    const numb = [1, 2, 3, 4, 5]
    // Normal notation
        // const numbResult = numb.reduce(function(pre, curr){
        //     return pre + curr
        // })
        // console.log(numbResult)

    // ES6 Notation
    const numbResult = numb.reduce((pre, crr) => pre + crr)
    console.log(numbResult)

    // Function to sum the elements in an array using REDUCE()
    function sum(a, b){
        return a + b
    }

    const numbs = [1, 2, 3]
    const resultz = numbs.reduce(sum)
    // const resultz = numbs.reduce((a,b) => a + b)
    console.log(resultz) 

    // Function to multiply elements within an Array using Reduce
    function mult(a, b){
        return a * b
    }
    const nom  = [1, 2, 3, 4]
    const resz = nom.reduce(mult)
    console.log(resz) 

    // function to sum up the networth of the peopla above
    console.log(actors.reduce((prev, curr) => prev + curr.networth, 0))