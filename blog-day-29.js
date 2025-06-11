//  📝 Day 29: Write a JavaScript function which gives the random number between the two number ?

// Solution:- 

function getRandomInteger(min, max) {
    console.log(`The random number between ${min} and ${max} :`);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

console.log(getRandomInteger(1, 10));   // e.g., 7
console.log(getRandomInteger(11, 34));   
console.log(getRandomInteger(55, 65));   
console.log(getRandomInteger(10, 40));   
console.log(getRandomInteger(24, 46));   

