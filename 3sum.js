// 15. 3Sum

// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []

var threeSum = function(nums) {
  nums = nums.sort((a, b) => a - b);
  let result = [];
  let j
  let k

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;
    j = i + 1;
    k = nums.length - 1;
    while (k > j) {
      if (nums[i] + nums[j] + nums[k] < 0) {
        j++;
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k--;
      } else if (nums[i] + nums[j] + nums[k] === 0) {
        result.push([nums[i], nums[j], nums[k]]);
        while (j < k && nums[j] === nums[j + 1]) j++;
        while (j < k && nums[k] === nums[k + 1]) k--;
        j++;
        k--;
      }
    }
  }
  return result;
};

// Success
// Details
// Runtime: 132 ms, faster than 98.90% of JavaScript online submissions for 3Sum.
// Memory Usage: 48.9 MB, less than 62.59% of JavaScript online submissions for 3Sum.