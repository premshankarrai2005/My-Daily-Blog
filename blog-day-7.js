// 📝 Day 7: Filter an array which contain object based on the male gender?

let arr = [
    { name: "praveen", age: 22, gender: "male" },
    { name: "werwe", age: 21, gender: "female" },
    { name: "rhhkt", age: 19, gender: "female" },
    { name: "jhlhjm", age: 20, gender: "nutral" },
    { name: "koutr", age: 21, gender: "male" },
    { name: "thgfg", age: 21, gender: "female" },
]

// Using filter method
arr.filter((obj) => {
    return obj.gender === "male"
})
console.log(arr)

// OR

// using for method and remove the object from the same same array
let count = 1;
for (let i = 1; i <= count; i++) {
    for (let J = 0; J < arr.length; J++) {
        if (arr[J].gender !== "male") {
            arr.splice(J, 1);//splice remove that object if gender not equal to male
            J--; // VERY IMPORTANT: move back the index after removal
        }
    }
}
console.log(arr)


