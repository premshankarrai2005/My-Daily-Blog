// 📝 Day 18: Write a Javascript funtion that generates and prints the multiplication table for a given number up to a specified range ?

// Solution:-

function multiTable(tableOf,tableTill) {
    console.log(`The table of ${tableOf} upto ${tableTill} times :`);
    for (let i = 1; i <= tableTill; i++) {
        let result = tableOf * i
        console.log(`${tableOf} x ${i} = ${result}`);
    }
}
multiTable(5,20)