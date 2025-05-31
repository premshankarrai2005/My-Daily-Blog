// 📝 Day 19: Write a Javascript funtion which counts the vowela and consonants in a given string ?

function CountVolConso(str) {
    const vowel = "aeiou";
    const consonant = "bcdfghjklmnpqrstvwxyz";
    let vowelCount = 0;
    let consonentCount = 0;
    let Str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (vowel.includes(Str[i])) {
            vowelCount ++;
        }
        else if(consonant.includes(Str[i])) {
            consonentCount ++;
        }

    }
    console.log(`The number of Vowels and Consonent in ${str} is :`);
    console.log("Vowels = " + vowelCount);
    console.log("consonents = " + consonentCount);
}
CountVolConso("Hellow World123456");