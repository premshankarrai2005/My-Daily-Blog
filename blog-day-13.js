//  📝 Day 13: Write a JavaScript function which return the number is power of 2 or not ?

// Solution:-

function PowerChecker1(n) {
    if (n <= 0) return false;

    // Using bitwise AND trick
    return (n & (n - 1)) === 0;
}
console.log(PowerChecker1(16)); // binary of 16 is 10000 and 16-1 =15 is  01111 if we apply AND operator on both 10000 & 01111 we know the rule of AND operator if both are one then only output is 1 otherwise 0 in this the output is 00000 .which is equal to the 0 so 16 is true or power of 2.
console.log(PowerChecker1(12)); // false
console.log(PowerChecker1(14)); // false
console.log(PowerChecker1(15)); // false
console.log(PowerChecker1(19)); // false


// OR

function PowerChecker2(n) {
    if (n <= 0) return false;

    // / Keep dividing the number by 2 while the number is even or remainder is 0.
    while (n % 2 === 0) {
        n = n / 2
    }

    // After dividing by 2 as much as possible, if we get 1, then yes it's power of two
    return n === 1; 
}
console.log(PowerChecker2(16)); // true
console.log(PowerChecker2(12)); // false
console.log(PowerChecker2(14)); // false
console.log(PowerChecker2(15)); // false
console.log(PowerChecker2(19)); // false

