// 1207. Unique Number of Occurrences

// Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:

// Input: arr = [1,2]
// Output: false
// Example 3:

// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true

var uniqueOccurrences = function(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    !obj[arr[i]] ? obj[arr[i]] = 1 : obj[arr[i]]++;
  }


  let values = Object.values(obj);
  let setValues = new Set(values);

  return values.length === setValues.size;
};

// Success
// Runtime: 84 ms, faster than 35.43% of JavaScript online submissions for Unique Number of Occurrences.
// Memory Usage: 39 MB, less than 55.78% of JavaScript online submissions for Unique Number of Occurrences.