//  📝 Day 28: Write a JavaScript function to check whether a given password is strong or not ?

// Solution:- 

  function isStrongPassword(password) {
  // Regular expression to validate the password
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/; // Using Regex

  if (strongPasswordRegex.test(password)) {
    return "✅ Strong Password";
  } else {
    return "❌ Weak Password: It must be at least 8 characters long and include uppercase, lowercase, number, and special character.";
  }
}
console.log(isStrongPassword("Hello@123"));  // ✅ Strong Password
console.log(isStrongPassword("hello123"));   // ❌ Weak Password
console.log(isStrongPassword("HELLO@123"));  // ❌ Weak Password
console.log(isStrongPassword("Hello123"));   // ❌ Weak Password


// Regex Explanation
/*

/                        // Start of regex                                                   
^                        // Start of string
(?=.*[a-z])              // At least one lowercase letter
(?=.*[A-Z])              // At least one uppercase letter
(?=.*\d)                 // At least one digit (number)
(?=.*[\W_])              // At least one special character (non-word character or underscore)
.{8,}                    // Minimum 8 characters
$                        // End of string
/                        // End of regex  


  */
