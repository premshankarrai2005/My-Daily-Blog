//  📝 Day 15: Write a JavaScript function which calculate the factorial of a number using recursion ?

// Solution:-
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;//factorial of 0 and 1 is 1.
    }
    else {
        return num * factorial(num - 1) //recursive call
    }
}
console.log(factorial(5)); // 120
console.log(factorial(3)); // 6
console.log(factorial(1)); // 1