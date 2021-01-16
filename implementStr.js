// 28. Implement strStr()

// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Example 3:

// Input: haystack = "", needle = ""
// Output: 0

var strStr = function(haystack, needle) {
  if (needle === '') return 0;
  let j = 0;

  for (let i = 0; i < haystack.length; i ++) {
    while (haystack[i + j] === needle[j]) {
      if (j === needle.length - 1) {
        return i;
      }
      j++;
    }
    j = 0;
  }
  return -1;
};

// Success
// Details
// Runtime: 2624 ms, faster than 11.07% of JavaScript online submissions for Implement strStr().
// Memory Usage: 39 MB, less than 50.72% of JavaScript online submissions for Implement strStr().