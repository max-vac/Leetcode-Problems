// 485. Max Consecutive Ones

// Given a binary array, find the maximum number of consecutive 1s in this array.

// Example 1:
// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
// The maximum number of consecutive 1s is 3.

var findMaxConsecutiveOnes = function(nums) {
  let counter = 0;
  let max = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      counter++;
      max = Math.max(max, counter);
    } else {
      counter = 0;
    }
  }

  return counter;
};

// Success
// Details
// Runtime: 88 ms, faster than 60.81% of JavaScript online submissions for Max Consecutive Ones.
// Memory Usage: 41.6 MB, less than 38.91% of JavaScript online submissions for Max Consecutive Ones.