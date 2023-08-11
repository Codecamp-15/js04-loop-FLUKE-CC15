
let guessNumber;

 do{
    guessNumber = prompt('Enter your answer')
    let outofrange = Number(guessNumber) < 1
 } while(guessNumber != ansNumber)