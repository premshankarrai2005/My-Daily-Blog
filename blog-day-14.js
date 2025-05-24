//  📝 Day 13: Write a JavaScript function which check the year is leap year or not ?

function CheckLeapYear(year) {
    

    // if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) return true;
    
    // else return false
     
    // OR

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        return true;
    }
    else{
        return false
    }
}
console.log(CheckLeapYear(2024)); //ture
console.log(CheckLeapYear(2023)); //false
console.log(CheckLeapYear(2674)); //false
console.log(CheckLeapYear(2654)); //false
console.log(CheckLeapYear(2234)); //false
console.log(CheckLeapYear(2065)); //false
console.log(CheckLeapYear(2056)); //ture
