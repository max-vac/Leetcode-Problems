// 965. Univalued Binary Tree

// A binary tree is univalued if every node in the tree has the same value.

// Return true if and only if the given tree is univalued.

// Example 1:

// Input: [1,1,1,1,1,null,1]
// Output: true
// Example 2:

// Input: [2,2,2,5,2]
// Output: false

var isUnivalTree = function(root) {
  if (!root) return true;
  return findValues(root, root.val);
};

let findValues = (node, val) => {
  if (!node) return true;

  if (node.val !== val) return false;

  return findValues(node.left, val) && findValues(node.right, val);
};

// Success
// Details
// Runtime: 56 ms, faster than 100.00% of JavaScript online submissions for Univalued Binary Tree.
// Memory Usage: 38.9 MB, less than 71.20% of JavaScript online submissions for Univalued Binary Tree.