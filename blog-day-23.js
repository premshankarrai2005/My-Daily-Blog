//  📝 Day 23: Write a javascript function which counts the number of words in a Sentence ?

// Solution:- 

function countsWord(str) {
    let Str = str.trim().split(/\s+/)
    console.log(str);
    console.log(`The number of Words in this Sentence is : ${Str.length}`);
}
countsWord("my name is prem.");

// Or

function countsWord(str) {
    let Str = str.split(" ")
    let count = Str.filter((e) => e != '')
    console.log(str);
    console.log(`The number of Words in this Sentence is : ${count.length}`);
}
countsWord("my name is prem.");