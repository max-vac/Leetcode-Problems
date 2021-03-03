// 5. Longest Palindromic Substring

// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
// Example 3:

// Input: s = "a"
// Output: "a"
// Example 4:

// Input: s = "ac"
// Output: "a"

var longestPalindrome = function(s) {
  //if s length is equal to 1 or 2 return the first letter
  //create palindromeChecker variable set to empty obj
  //create variable j
  //create longestPalindrome set to an empty string

  //iterate over s set j to i + 1
    //if no key for s[i] in palindromeChecker than add it and set to one
    //else increment by 1

    //let count = 0;
    //if s[i] value is equal to s[j] value
      //iterate over palindromeChecker values
        //add values to count

    //if count is odd and longer than longestPalindrome
      //set longest palindrome to slice from i to j

  //if longestPalindrome is equal to an empty string
    //set longestPalindrome to the first letter of the string

  //return longestPupal
};