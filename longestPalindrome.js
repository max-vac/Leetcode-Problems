// 409. Longest Palindrome

// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Example 3:

// Input: s = "bb"
// Output: 2

var longestPalindrome = function(s) {
  let charObj = new Set();

  for (let char of s) {
    charObj.has(char) ? charObj.delete(char) : charObj.add(char);
  }

  charObj.size > 1 ? return s.length - Math.abs(1 - charObj.size) : return s.length;
};

// Success
// Details
// Runtime: 84 ms, faster than 76.04% of JavaScript online submissions for Longest Palindrome.
// Memory Usage: 40.2 MB, less than 38.89% of JavaScript online submissions for Longest Palindrome.