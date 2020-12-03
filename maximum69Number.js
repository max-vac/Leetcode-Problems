// 1323. Maximum 69 Number
// 12/03/2020

// Given a positive integer num consisting only of digits 6 and 9.

// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

// Example 1:

// Input: num = 9669
// Output: 9969
// Explanation:
// Changing the first digit results in 6669.
// Changing the second digit results in 9969.
// Changing the third digit results in 9699.
// Changing the fourth digit results in 9666.
// The maximum number is 9969.
// Example 2:

// Input: num = 9996
// Output: 9999
// Explanation: Changing the last digit 6 to 9 results in the maximum number.
// Example 3:

// Input: num = 9999
// Output: 9999
// Explanation: It is better not to apply any change.

let maximum69Number = (num) => {
  let maximum = num;
  let numStr = num.toString();
  let pointer = 1;
  let values = {
    4: 3000,
    3: 300,
    2: 30,
    1: 3
  }

  for (let i = numStr.length - 1; i >= 0; i--) {
    if (numStr[i] === '9') {
      maximum = Math.max(maximum, (num - values[pointer]))
    } else {
      maximum = Math.max(maximum, (num + values[pointer]))
    }
    pointer++;
  }
  return maximum;
};

// Success
// Runtime: 76 ms, faster than 83.02% of JavaScript online submissions for Maximum 69 Number.
// Memory Usage: 38.4 MB, less than 92.83% of JavaScript online submissions for Maximum 69 Number.

