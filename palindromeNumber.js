// 9. Palindrome Number

// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

// Example 1:

// Input: x = 121
// Output: true
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Example 4:

// Input: x = -101
// Output: false

var isPalindrome = function(x) {
  x = x.toString();
  let i;
  let j;

  if (x.length % 2 === 0) {
    j = x.length / 2;
    i = j - 1;
  } else {
    i = j = Math.ceil(x.length / 2) - 1;
  }

  while (i >= 0 && j < x.length) {
    if (x[i] !== x[j]) {
      return false;
    }
    i--;
    j++;
  }

  return true;
};

// Success
// Details
// Runtime: 196 ms, faster than 96.95% of JavaScript online submissions for Palindrome Number.
// Memory Usage: 48.5 MB, less than 82.17% of JavaScript online submissions for Palindrome Number.