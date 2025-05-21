//  📝 Day 12: Write a JavaScript function which return the missing one number from 1 to n (natural number)?

MissingNumber =(arr)=>{
    const n=arr.length +1;
    const Expected_sum = (n*(n+1))/2;
    
    // apply reduce method 
    const actual_number = arr.reduce((sum,num)=>num+sum,0);//the starting value of sum is 0,sum is the addition of previous value and num is the current number in the array that is being processed or increases by one
    return Expected_sum - actual_number
}
const arr = [1, 2, 3, 5];
console.log(MissingNumber(arr))


// Reduce Definition :-
// The reduce() method processes an array by applying a function to each element, accumulating a single final result, such as a sum, product, or object, starting from an initial value. 
//   e.g:-
    // const sum = numbers.reduce((acc, curr) => {
    //    return acc + curr;
    // }, initial value);