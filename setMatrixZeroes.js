// 73. Set Matrix Zeroes
// Medium

// Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.

// Follow up:

// A straight forward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution?

// Example 1:

// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
// Example 2:

// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

var setZeroes = function (matrix) {
  let horLocation = new Array(matrix.length);
  let vertLocation = new Array(matrix[0].length);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        horLocation[i] = true;
        vertLocation[j] = true;
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (horLocation[i] === true || vertLocation[j] === true) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};

// Success
// Details
// Runtime: 88 ms, faster than 97.93% of JavaScript online submissions for Set Matrix Zeroes.
// Memory Usage: 40.2 MB, less than 95.46% of JavaScript online submissions for Set Matrix Zeroes.
