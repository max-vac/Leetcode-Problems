// 257. Binary Tree Paths

// Given a binary tree, return all root-to-leaf paths.

// Note: A leaf is a node with no children.

// Example:

// Input:

//    1
//  /   \
// 2     3
//  \
//   5

// Output: ["1->2->5", "1->3"]

// Explanation: All root-to-leaf paths are: 1->2->5, 1->3

var binaryTreePaths = function(root) {
  let paths = [];

  if (!root) return paths;

  dfs(root, '', paths);
  return paths;
};

let dfs = (node, path, paths) => {
  path += node.val;

  if (!node.left && !node.right) paths.push(path);

  path += '->';

  if (node.left) dfs(node.left, path, paths);
  if (node.right) dfs(node.right, path, paths);
};

// Success
// Details
// Runtime: 76 ms, faster than 96.17% of JavaScript online submissions for Binary Tree Paths.
// Memory Usage: 40.3 MB, less than 56.34% of JavaScript online submissions for Binary Tree Paths.