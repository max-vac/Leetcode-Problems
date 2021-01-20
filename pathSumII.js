// 113. Path Sum II

// Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where each path's sum equals targetSum.

// A leaf is a node with no children.

// Example 1:

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// Output: [[5,4,11,2],[5,8,4,5]]
// Example 2:

// Input: root = [1,2,3], targetSum = 5
// Output: []
// Example 3:

// Input: root = [1,2], targetSum = 0
// Output: []

var pathSum = function(root, targetSum) {
  let sums = [];
  if (!root) return sums;

  dfs(root, 0, [], sums, targetSum);
  return sums;
};

let dfs = (node, sum, nums, sums, targetSum) => {
  sum += node.val;
  nums.push(node.val);

  if (!node.left && !node.right && sum === targetSum) sums.push(nums);

  if (node.left) dfs(node.left, sum, nums.slice(), sums, targetSum);
  if (node.right) dfs(node.right, sum, nums.slice(), sums, targetSum);
};


// Success
// Details
// Runtime: 96 ms, faster than 74.80% of JavaScript online submissions for Path Sum II.
// Memory Usage: 49.9 MB, less than 10.96% of JavaScript online submissions for Path Sum II.