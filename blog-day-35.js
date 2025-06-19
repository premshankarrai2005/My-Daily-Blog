//  📝 Day 35: Write a javascript program which ckeck the given input is Strong number or Not ?

// Solution:-
let n = Number(prompt('Enter the number :'))
if (isNaN(n) || n < 0 || !Number.isInteger(n)) {
    console.log("❌ Invalid input! Please enter a non-negative whole number.");
} else {
    let sum = 0;
    let originalNumber = n // Store the original number before loop
    while (n > 0) {
        let rem = n % 10;
        let fact = 1
        for (let i = 1; i <= rem; i++) {
            fact *= i
        }
        sum = sum + fact
        n = Math.floor(n / 10);
    }
    if (originalNumber === sum) {
        console.log(`${originalNumber} is a Strong Number.`);
    } else {
        console.log(`${originalNumber} is not a Strong Number.`);
    }

}