// LETTER FREQUENCY
// function to return the frequency of each letter  
const letfreg = (phrase) => {
    //letterFrequency('haha) --> {'h': 2, 'a':2}
    console.log(phrase)
    // make a frequency object {}
    let frequency = {}
    for (const letter of phrase) {
        //check if letter exists in frequency
       if( letter in frequency ){
            // increment the value by +1
            // frequency[letter] = frequency[letter] + 1
            frequency[letter] += 1
            // frequency[letter] ++
        // otherwise, set the value to 1
        }else{
            frequency[letter] = 1
        }   
    }  
    return frequency 
        
    } 
    console.log(letfreg('coderio'))    

// WORD FREQUENCY
const wordFrequency = (phrase) => {
    /* let frequency = {}
    words = phrase.split(' ')
    for (const word of words){
        console.log(word)
        if (word in frequency){
            frequency[word] ++
        }else{
            frequency[word] = 1  
        }
    }
    console.log(words)
    return frequency */

    // since both wordfrequency and letter frequency work the same way
    // let's us do it like this by called the previous function 

    const words = phrase.split(' ')
    return letfreg(words)
}
    const userInput = prompt('Write your setence') 
    console.log(wordFrequency(userInput))