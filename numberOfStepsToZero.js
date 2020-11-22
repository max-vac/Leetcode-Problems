//1342. Number of Steps to Reduce a Number to Zero
//11/22/2020

// Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

// Example 1:

// Input: num = 14
// Output: 6
// Explanation:
// Step 1) 14 is even; divide by 2 and obtain 7.
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3.
// Step 4) 3 is odd; subtract 1 and obtain 2.
// Step 5) 2 is even; divide by 2 and obtain 1.
// Step 6) 1 is odd; subtract 1 and obtain 0.
// Example 2:

// Input: num = 8
// Output: 4
// Explanation:
// Step 1) 8 is even; divide by 2 and obtain 4.
// Step 2) 4 is even; divide by 2 and obtain 2.
// Step 3) 2 is even; divide by 2 and obtain 1.
// Step 4) 1 is odd; subtract 1 and obtain 0.

var numberOfSteps  = function(num) {
  let counter = 0;

  let math = (num) => {
    if (num === 0) {
      return;
    }

    if (num % 2 === 1) {
      counter++;
      math(num - 1);
    } else {
      counter++;
      math(num / 2);
    }
  };

  math(num);
  return counter;
};

// Success
// Runtime: 80 ms, faster than 66.96% of JavaScript online submissions for Number of Steps to Reduce a Number to Zero.
// Memory Usage: 38.4 MB, less than 80.00% of JavaScript online submissions for Number of Steps to Reduce a Number to Zero.