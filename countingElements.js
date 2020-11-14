// 1426. Counting Elements
//11/14/2020

// Given an integer array arr, count how many elements x there are, such that x + 1 is also in arr.

// If there're duplicates in arr, count them seperately.



// Example 1:

// Input: arr = [1,2,3]
// Output: 2
// Explanation: 1 and 2 are counted cause 2 and 3 are in arr.

// Example 2:

// Input: arr = [1,1,3,3,5,5,7,7]
// Output: 0
// Explanation: No numbers are counted, cause there's no 2, 4, 6, or 8 in arr.
// Example 3:

// Input: arr = [1,3,2,3,5,0]
// Output: 3
// Explanation: 0, 1 and 2 are counted cause 1, 2 and 3 are in arr.

// Example 4:

// Input: arr = [1,1,2,2]
// Output: 2
// Explanation: Two 1s are counted cause 2 is in arr.
// Example 5:

// Input: arr = [1,1,2]
// Output: 2
// Explanation: Both 1s are counted because 2 is in the array.

var countElements = function(arr) {
  let counter = 0;
  let results = {};

  for (let i = 0; i < arr.length; i++) {
    !results[arr[i]] ? results[arr[i]] = 1 : results[arr[i]]++;
  }

  for (let key in results) {
    if (results.hasOwnProperty(+(key) + 1)) {
      counter += results[key];
    }
  }
  return counter;
};

// Success
// Runtime: 72 ms, faster than 89.71% of JavaScript online submissions for Counting Elements.
// Memory Usage: 38.7 MB, less than 45.59% of JavaScript online submissions for Counting Elements.