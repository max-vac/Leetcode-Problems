// 404. Sum of Left Leaves

// Find the sum of all left leaves in a given binary tree.

// Example:

//     3
//    / \
//   9  20
//     /  \
//    15   7

// There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.

var sumOfLeftLeaves = function(root) {
  return findSum(root, false);
};

let findSum = (node, isLeft) {
  return findSum(root, false);
};

let findSum = (node, isLeft) => {
    if (!node) return 0;

    let sum = 0;

    if (!node.left && !node.right && isLeft) return node.val

    if (node.left) sum += findSum(node.left, true);
    if (node.right) sum += findSum(node.right, false);

    return sum;
};

// Success
// Details
// Runtime: 76 ms, faster than 96.08% of JavaScript online submissions for Sum of Left Leaves.
// Memory Usage: 40.4 MB, less than 16.27% of JavaScript online submissions for Sum of Left Leaves.

var sumOfLeftLeaves = function(root) {
  return findSum(root, false);
};

let findSum = (node, isLeft) => {
 if (!node) return 0;

 if (!node.left && !node.right && isLeft) return node.val;

 return findSum(node.left, true) + findSum(node.right, false);
};

// Success
// Details
// Runtime: 72 ms, faster than 99.10% of JavaScript online submissions for Sum of Left Leaves.
// Memory Usage: 40.1 MB, less than 44.28% of JavaScript online submissions for Sum of Left Leaves.