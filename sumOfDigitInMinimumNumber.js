// 1085. Sum of Digits in the Minimum Number
// 12/03/2020

// Given an array A of positive integers, let S be the sum of the digits of the minimal element of A.

// Return 0 if S is odd, otherwise return 1.

// Example 1:

// Input: [34,23,1,24,75,33,54,8]
// Output: 0
// Explanation:
// The minimal element is 1, and the sum of those digits is S = 1 which is odd, so the answer is 0.
// Example 2:

// Input: [99,77,33,66,55]
// Output: 1
// Explanation:
// The minimal element is 33, and the sum of those digits is S = 3 + 3 = 6 which is even, so the answer is 1.

var sumOfDigits = function(A) {
  let minimum = Infinity;
  let sum = 0;

  for (let i = 0; i < A.length; i++) {
    minimum = Math.min(minimum, A[i]);
  }

  minimum = minimum.toString().split('');
  console.log(minimum)
  for (let i = 0; i < minimum.length; i++) {
    sum += Number(minimum[i])
  }

  return sum % 2 === 0 ? 1 : 0;
};

// Success
// Runtime: 68 ms, faster than 98.28% of JavaScript online submissions for Sum of Digits in the Minimum Number.
// Memory Usage: 38.3 MB, less than 91.38% of JavaScript online submissions for Sum of Digits in the Minimum Number.