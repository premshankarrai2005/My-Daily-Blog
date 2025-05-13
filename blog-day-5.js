// 📝 Day 5: Write a javascript function which to count the number of occurence of each letter in a string?

function occurenceCheck(str) {

    //first create empty object
    let ocurr = {}

    //split and loop on every char
    str.split("").forEach(element => {
        if (ocurr.hasOwnProperty(element) === false) { //hasOwnProperty check  if element not available in the ocurr then it take that element=1.  
            ocurr[element] = 1
        }
        else {
            ocurr[element]++ //if it get the element again then that element  increase by one.
        }
    });

    //it return the ocurr object.
    return ocurr
}
console.log(occurenceCheck("banana")); //{ b: 1, a: 3, n: 2 }