//  📝 Day 37: Write a javascript program which find the 2nd largest number in an array without using sorting ?

// Solution:-

let arr = [10, 20, 54, 30, 43, 67, 53, 12, 567, 65, 555,567]
let max = Math.max(arr[0], arr[1])
let smax = Math.min(arr[0], arr[1])
for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
        smax = max
        max = arr[i]
    } else if (smax < arr[i] && max !== arr[i]) {
        smax = arr[i]
    }
}
console.log('The First largest number is : ',max);
console.log('The Second largest number is : ',smax);

