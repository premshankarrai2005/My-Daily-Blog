//  📝 Day 31: Write a JavaScript program that prints 'Fizz' if the number is divisible by 3, 'Buzz' if divisible by 5, and 'FizzBuzz' if divisible by both 3 and 5. Otherwise, print the number. loop this from 1 to 100 ?

// Solution:-

for (let i=1;i<=100;i++){
    if(i%3===0&&i%5===0){
        console.log('FizzBuzz');
    }else if(i%3===0){
        console.log('Fizz');
    }else if(i%5===0){
        console.log('Buzz');
    }else{
        console.log(i);
    }
}
