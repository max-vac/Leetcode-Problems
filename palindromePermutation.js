// 266. Palindrome Permutation

// Given a string, determine if a permutation of the string could form a palindrome.

// Example 1:

// Input: "code"
// Output: false
// Example 2:

// Input: "aab"
// Output: true
// Example 3:

// Input: "carerac"
// Output: true

var canPermutePalindrome = function(s) {
  let counter = 0;
  let letterObj = {};

  for (let i = 0; i < s.length; i++) {
    (!letterObj[s[i]]) ? letterObj[s[i]] = 1 : letterObj[s[i]]++;
  }

  for (let letter in letterObj) {
    if (letterObj[letter] % 2 === 1) counter++;
  }

  return (counter > 1) ? false : true;
};

// Success
// Details
// Runtime: 68 ms, faster than 96.77% of JavaScript online submissions for Palindrome Permutation.
// Memory Usage: 38.6 MB, less than 34.19% of JavaScript online submissions for Palindrome Permutation.

