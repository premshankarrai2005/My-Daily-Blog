# 📝 Day 4: What is Temporal Dead Zone in javascript and How to prevent from that?
     
     🚫 Understanding Temporal Dead Zone (TDZ) in JavaScript :-
       When working with JavaScript, especially with let and const, you might encounter a ReferenceError if you try to access a variable before declaring it. This is due to a concept known as the Temporal Dead Zone (TDZ).
       
       e.g:-
             a=20
             console.log(a); // ❌ ReferenceError
       l     et a = 10;
       
       but the var variable does not go in the TDZ. if call the variable which is decleared with var before initialion then it gives the output undefined.
       
             e.g:-
             console.log(b); // ✅ undefined
             var b = 40;
             (In the first example if we use the var then the output is 20.)
       
    🔍 What is Temporal Dead Zone (TDZ)?
    The Temporal Dead Zone is the period between when a let or const variable is hoisted and when it is initialized.
    
    🧠 Why TDZ Exists?
     The TDZ helps catch errors early and ensures that variables are not used before they are ready.
     It enforces better coding practices by avoiding unintentional usage of undefined or uninitialized variables.
     
    🛡️ How to Avoid TDZ Errors in JavaScript:-
         ✅ 1. Declare Variables at the Top of the Scope.
         ✅ 2. Never Use Variables Before Declaring Them.
         ✅ 3. Initialize const at the Time of Declaration.
         ✅ 4. Avoid Mixing var, let, and const Without Understanding Scope.
         ✅ 5. Understand the Scope You’re Working In.
         

 
    
    