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
  //create a charObj set to a new set()


  //iterate over the s string
    //if char is not in charObj
      //delete value
    //else
      //add that value

   //if the size of the set is greater than 1
    //return the length of s - the absolute value of 1 - the size of the charObj
  //else
    //return the length of s
};