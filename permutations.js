// 46. Permutations

// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]

var permute = function (nums) {
  let permResults = [];
  let getPerms = (arr, tempArr = []) => {
    if (!arr.length) permResults.push(tempArr);

    for (let i = 0; i < arr.length; i++) {
      let remainderNums = arr.slice();
      let nextNum = remainderNums.splice(i, 1);
      getPerms(remainderNums, tempArr.concat(nextNum));
    }
  };
  getPerms(nums, (tempArr = []));
  return permResults;
};

// Success
// Details
// Runtime: 84 ms, faster than 98.76% of JavaScript online submissions for Permutations.
// Memory Usage: 41.4 MB, less than 83.63% of JavaScript online submissions for Permutations.
