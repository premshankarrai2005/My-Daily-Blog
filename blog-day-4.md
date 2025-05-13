# 📝 Day 4: Write a javascript function which return the string in alphbetical order?

// function for the alphabetical order

function Alphorder(str){    
   return str.toLowerCase().split("").sort().join("")   
}

console.log(Alphorder("Prem Shankar Rai")) //
console.log(Alphorder("Sumo")) //
