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
  //create variable lps set to length of s
  //set the first index (0) to 0
  //create i variable set to 1;
  //create len variable set to 0

  //while i is less than length of s
    //if s[i] is equal to sp[len]
      //increment len
      //set the value of lps at i to len
      //increment i
    //else
      //if len
        //set len to the value of lps at len - 1
      //else
        //set lps at i to 0
        //increment i
    //return whether there is a len the s length % by the last index of the array is equal to 0
};