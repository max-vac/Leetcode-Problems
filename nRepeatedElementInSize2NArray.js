// 961. N-Repeated Element in Size 2N Array
// 12/06/2020

// In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

// Return the element repeated N times.

// Example 1:

// Input: [1,2,3,3]
// Output: 3
// Example 2:

// Input: [2,1,2,5,3,2]
// Output: 2
// Example 3:

// Input: [5,1,5,2,5,3,5,4]
// Output: 5

var repeatedNTimes = function(A) {
  let obj= {};

  for (key of A) {
    !obj[key] ? obj[key] = 1 : obj[key]++;

    if (obj[key] === A.length / 2) {
      return key;
    }
  }
};

// Success
// Runtime: 100 ms, faster than 43.00% of JavaScript online submissions for N-Repeated Element in Size 2N Array.
// Memory Usage: 44.7 MB, less than 23.10% of JavaScript online submissions for N-Repeated Element in Size 2N Array.