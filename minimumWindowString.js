// 76. Minimum Window Substring

// Given two strings s and t, return the minimum window in s which will contain all the characters in t. If there is no such window in s that covers all characters in t, return the empty string "".

// Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in s.

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"

var minWindow = function(s, t) {
  //create variable stringObj set to an empty string
  //iterate over t
    //if not in value key then set it to 1 otherwise increment the key

  //create variable i set to 0
  //create variable j set to 0

  //create minWindow set to Infinity

  //while i is less than s.length
    //if j is present in the stringObj
      //decrement the value
      //create sum variable set to 0
      //iterate through the obj
        //add values to sum

      //if sum === 0
        //set minWindow to either itself or the distances between i and j
        //increment i
        //set stringobj at i + 1 to 1

      //increment j

    //return minWindow
};