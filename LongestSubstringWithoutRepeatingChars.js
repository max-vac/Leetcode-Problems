// 3. Longest Substring Without Repeating Characters
// 11/19/2020

// Given a string s, find the length of the longest substring without repeating characters.



// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:

// Input: s = ""
// Output: 0

var lengthOfLongestSubstring = function(s) {
  //create a start varaible set to 0
  //create longest variable set to 0
  //create obj varaible set to an empty {}

  //iterate over s
    //if value not in object
      //set value key to 0

    //increment the property at that value

    //if the values of the obj are greater than 1
      //decrement the value at start by 1
      //increment start

    //longest wil be the result of math max between longest and i - start + 1 for initial start

  //return longest
};