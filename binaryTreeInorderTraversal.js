94. Binary Tree Inorder Traversal

Given the root of a binary tree, return the inorder traversal of its nodes' values.

Example 1:

Input: root = [1,null,2,3]
Output: [1,3,2]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
Example 4:

Input: root = [1,2]
Output: [2,1]
Example 5:

Input: root = [1,null,2]
Output: [1,2]

var inorderTraversal = function(root) {
  let order = [];

  let depthFirst = (node) => {
      if (node) {
          depthFirst(node.left);
          order.push(node.val);
          depthFirst(node.right);
      }
  }

  depthFirst(root);
  return order;
};

// Success
// Details
// Runtime: 72 ms, faster than 93.52% of JavaScript online submissions for Binary Tree Inorder Traversal.
// Memory Usage: 38.6 MB, less than 80.87% of JavaScript online submissions for Binary Tree Inorder Traversal.