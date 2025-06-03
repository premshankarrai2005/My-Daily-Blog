//  📝 Day 21: Write a javascript function which print the given number is prime number or Not ?

// Solution:- 

function isPrime(number) {
  if (number <= 1) {
    console.log(number + " is not a prime number");
    return;
  }

  // Check from 2 to sqrt(number)
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      console.log(number + " is not a prime number");
      return;
    }
  }

  console.log(number + " is a prime number");
}
isPrime(-23)

