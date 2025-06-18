//  📝 Day 34: Write a JavaScript program to calculate the electricity bill based on this slab: ₹4/unit for  first 100 units, ₹6/unit for next 100 (101–200), ₹8/unit for next 200 (201–400), and ₹13/unit for units above   400 using conditional statements.

// Solution:-

let unit = Number(prompt("Enter the electricity unit how much you consumed:"))
let bill = 0
if (unit>400){
    bill+=(unit-400)*13
    unit=400
}
if (unit>200){
    bill+=(unit-200)*8
    unit=200
}
if (unit>100){
    bill+=(unit-100)*6
    unit=100
}
bill+=(unit)*4
console.log(`The total Electricity bill is : ${bill}`);