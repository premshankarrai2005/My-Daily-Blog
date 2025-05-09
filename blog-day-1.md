# 📝 Day 1: How to Check if a Variable is an Array or Not in JavaScript?

## 🔍 Problem Statement
       You are given a variable in JavaScript, and you need to check whether it is an array or not. What is the best and most reliable way to do this?
       
### ✅ Syntax:
              
              Array.isArray(value);
              
### Solution:-
      
      const data1 = [1, 2, 3];
      const data2 = { name: "Vivekanand" };

      console.log(Array.isArray(data1)); // true
      console.log(Array.isArray(data2)); // false