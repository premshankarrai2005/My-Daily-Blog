//  📝 Day 21: Write a javascript function which calculates and prints simple interest on a loan amount ?

// Solution:- 

function calculateSimpleInterest(principleAmount, interestRateYearly, durationInYears) {
    
    let multiplication = principleAmount * interestRateYearly * durationInYears;
    
    let result = multiplication / 100;
    
    return result
}
console.log(calculateSimpleInterest(1000, 10, 5));