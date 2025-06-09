//  📝 Day 26: Write a javascript function which check the given number is perfect number or not ?

// Solution:- 

function isPerfectNumber(inputNumber) {
    let Sum = 0;
    for (let i = 1; i < inputNumber; i++) {       
        if (inputNumber % i === 0) {
            Sum += i;
        }
    }
    if (Sum===inputNumber){
        console.log(`${inputNumber} number Perfect Number.`);
    }
    else {
        console.log(`${inputNumber} number is not Perfect Number.`);
    }
   }
   isPerfectNumber(6);      // 6 number Perfect Number.
   isPerfectNumber(28);     // 28 number Perfect Number.
   isPerfectNumber(496);    // 496 number Perfect Number.
   isPerfectNumber(8128);   // 8128 number Perfect Number.
   isPerfectNumber(34534);  // 34534 number is not Perfect Number.