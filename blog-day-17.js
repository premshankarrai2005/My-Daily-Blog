// 📝 Day 17: What ia the Output of the following console ?console.log(3 + 3); , console.log("3" + "3"); , console.log("3" + + 3); , console.log(3 + + "3"); , console.log(3 + 3 - 3); , console.log("3" + "3" - "3"); ?

// Solution:-

console.log(3 + 3);           //6
// Reason: Both operands are numbers, so regular arithmetic addition happens.

console.log("3" + "3");       //"33"
// Reason: Both are strings, so + performs string concatenation.

console.log("3" + + 3);       //“33”
// Reason: +3 is a number, and "3" + 3 results in string concatenation → "3" + 3 = "33".

console.log(3 + + "3");       //6
// Reason: Unary + converts "3" to number, so 3 + 3 = 6.

console.log(3 - - "3");       //6
// Reason: Unary - converts "3" to number -3, and 3 - (-3) = 6.

console.log(3 + 3 - 3);       //3
// Reason: Standard arithmetic: 3 + 3 = 6, then 6 - 3 = 3.

console.log("3" + "3" - "3"); //30
// Reason: "3" + "3" = "33" (string), then "33" - "3" = 33 - 3 = 30 (both get coerced to numbers for -).

