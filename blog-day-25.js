//  📝 Day 25: Write a javascript function which swap the Value from A to B and B to A?

// Solution:- 

function SwappingVal(A, B) {
    console.log("Value Before swap: A =", A, ", B =", B);
    let temp = A;
    A = B;
    B = temp;
    console.log("Value After swap: A =", A, ", B =", B);
}

SwappingVal(10, 20); // Output: After swap: a = 20 , b = 10
SwappingVal("Ram", "Shyam"); // Output: After swap: a = 20 , b = 10
