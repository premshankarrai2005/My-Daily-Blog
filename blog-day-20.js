//  📝 Day 20: Write a javascript function which return the average of given number ?

// Solution:- 

function average(...num) { //using the rest operator (...num) , we can take any number of input.
    
    let Sum = num.reduce((acc, curr) => acc + curr, 0) // added initial value 0
    
    let Result = Sum / num.length
    
    return Result;
}
console.log(average(1, 2, 3, 4, 5)); // Output: 3