//  📝 Day 11: Write a JavaScript function that checks if two strings are anagrams of each other. An anagram is a word or phrase formed by rearranging the letters of another, using all the original letters exactly once.?

// solution:-

function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;

    const Sortedstr1 = str1.toLowerCase().split("").sort().join("");
    const Sortedstr2 = str2.toLowerCase().split("").sort().join("");

    return Sortedstr1 === Sortedstr2;
}
onsole.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("hello", "world"));   // Output: false