// 129. Sum Root to Leaf Numbers

// Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.

// An example is the root-to-leaf path 1->2->3 which represents the number 123.

// Find the total sum of all root-to-leaf numbers.

// Note: A leaf is a node with no children.

// Example:

// Input: [1,2,3]
//     1
//    / \
//   2   3
// Output: 25
// Explanation:
// The root-to-leaf path 1->2 represents the number 12.
// The root-to-leaf path 1->3 represents the number 13.
// Therefore, sum = 12 + 13 = 25.
// Example 2:

// Input: [4,9,0,5,1]
//     4
//    / \
//   9   0
//  / \
// 5   1
// Output: 1026
// Explanation:
// The root-to-leaf path 4->9->5 represents the number 495.
// The root-to-leaf path 4->9->1 represents the number 491.
// The root-to-leaf path 4->0 represents the number 40.
// Therefore, sum = 495 + 491 + 40 = 1026.

var sumNumbers = function(root) {
  if (!root) return 0;
  let sum = 0;

  dfs(root, sum, '');

  return sum;
};

let dfs = (node, sum, pathSum) => {
  pathSum += node.val;

  if (!node.left && !node.right) {
    pathSum = Number(pathSum);
    sum += pathSum;
    return sum;
  }

  if (node.left && node.right) return dfs(node.left, sum, pathSum) + dfs(node.right, sum, pathSum);
  if (node.left) return dfs(node.left, sum, pathSum);
  if (node.right) return dfs(node.right, sum, pathSum);
}

// Success
// Details
// Runtime: 64 ms, faster than 100.00% of JavaScript online submissions for Sum Root to Leaf Numbers.
// Memory Usage: 40.1 MB, less than 76.22% of JavaScript online submissions for Sum Root to Leaf Numbers.