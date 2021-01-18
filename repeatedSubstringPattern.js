// 459. Repeated Substring Pattern

// Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

// Example 1:

// Input: "abab"
// Output: True
// Explanation: It's the substring "ab" twice.
// Example 2:

// Input: "aba"
// Output: False
// Example 3:

// Input: "abcabcabcabc"
// Output: True
// Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)

var repeatedSubstringPattern = function(s) {
  let lps = new Array(s.length)
  lps[0] = 0;
  let i = 1;
  let len = 0;

  while (i < s.length) {
    if (s[i] === s[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len) {
        len = lps[len - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }

 return (len && s.length % (s.length - lps[s.length - 1]) === 0) ? true : false
  ;
};

// Success
// Details
// Runtime: 84 ms, faster than 90.14% of JavaScript online submissions for Repeated Substring Pattern.
// Memory Usage: 43.4 MB, less than 74.65% of JavaScript online submissions for Repeated Substring Pattern.