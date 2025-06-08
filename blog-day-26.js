//  📝 Day 26: Write a javascript function that print a Number Pyramid like 1,121,12321,....?

// Solution:- 

function Pyramid(n) {
    
    console.log("The pyramid of " + n + " Number is :");
    
    for (let i = 1; i <= n; i++) {
        let space = ' '.repeat(n - i);

        // Ascending Part
        let Asc = ""
        for (let j = 1; j <= i; j++) {
            Asc += j
        }

        // Descending Part
        let Dec = ""
        for (let j = i - 1; j >= 1; j--) {
            Dec += j
        }
        console.log(space + Asc + Dec);
    }
    
}
Pyramid(5)