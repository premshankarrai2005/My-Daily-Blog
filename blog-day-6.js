// 📝 Day 5: We have an array in that string and number both are availables.Write a javascript program which only gives the addition of number?

let array = ["prem", 45, "dgfggd", 53, "grbht", 12, "mhgvc", "gdfhfd", "gdary", 456]
sum = 0;
array.forEach(function (elem) {
    if (typeof elem === 'number') {
        //check the condition if element is number then it add the all element in the sum
        sum = sum + elem
    }
})
console.log(sum);