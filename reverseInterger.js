// 7. Reverse Integer

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
// Example 4:

// Input: x = 0
// Output: 0

var reverse = function (x) {
  let reverseSum = 0;
  let numStr = Math.abs(x).toString();
  let reverseIndex = numStr.length - 1;

  for (let i = 0; i < numStr.length; i++) {
    let str = numStr.slice(0, reverseIndex + 1);
    let getRemainder = str % 10;

    reverseSum += getRemainder * 10 ** reverseIndex;
    reverseIndex--;
  }

  if (reverseSum > Math.pow(2, 31) - 1 || reverseSum < Math.pow(-2, 31)) {
    return 0;
  }

  return x < 0 ? -reverseSum : reverseSum;
};

// Success
// Details
// Runtime: 88 ms, faster than 95.55% of JavaScript online submissions for Reverse Integer.
// Memory Usage: 40.7 MB, less than 13.14% of JavaScript online submissions for Reverse Integer.
