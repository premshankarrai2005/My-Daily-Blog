//  📝 Day 23: Write a javascript function which convert Celsius to Fahrenheit ?

// Solution:- 

function CelsiToFahrenheit(Celsius) {

    let Fahrenheit = (Celsius * 9 / 5) + 32
    
    console.log(`${Celsius} Degree Celsius = ${Fahrenheit} Degree Fahrenheit`);
}

CelsiToFahrenheit(23);
CelsiToFahrenheit(27);
CelsiToFahrenheit(34);