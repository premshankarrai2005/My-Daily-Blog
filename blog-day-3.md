# 📝 Day 3: Write a Javascript function which check the given string is Palindrome or Not?

## Solution:-
        function StrPalChecker(str){
            const reversed = str.split('').reverse().join('')
            return reversed === str
        }
        console.log(StrPalChecker('lool')) //true
        console.log(StrPalChecker('loop')) //false