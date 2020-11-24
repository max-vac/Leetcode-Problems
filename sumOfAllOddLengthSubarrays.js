// 1588. Sum of All Odd Length Subarrays
//11/23/2020

// Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

// A subarray is a contiguous subsequence of the array.

// Return the sum of all odd-length subarrays of arr.

// Example 1:

// Input: arr = [1,4,2,5,3]
// Output: 58
// Explanation: The odd-length subarrays of arr and their sums are:
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1,4,2] = 7
// [4,2,5] = 11
// [2,5,3] = 10
// [1,4,2,5,3] = 15
// If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58

var sumOddLengthSubarrays = function(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if ((j - i) % 2 === 0) {
        result += arr.slice(i, j + 1).reduce((acc, val) => {
          return acc += val;
        }, 0)
      }
    }
  }
  return result;
};

// Success
// Runtime: 84 ms, faster than 55.82% of JavaScript online submissions for Sum of All Odd Length Subarrays.
// Memory Usage: 44.2 MB, less than 19.40% of JavaScript online submissions for Sum of All Odd Length Subarrays.