//788. Rotated Digits

// X is a good number if after rotating each digit individually by 180 degrees, we get a valid number that is different from X.  Each digit must be rotated - we cannot choose to leave it alone.

// A number is valid if each digit remains a digit after rotation. 0, 1, and 8 rotate to themselves; 2 and 5 rotate to each other (on this case they are rotated in a different direction, in other words 2 or 5 gets mirrored); 6 and 9 rotate to each other, and the rest of the numbers do not rotate to any other number and become invalid.

// Now given a positive number N, how many numbers X from 1 to N are good?

// Example:
// Input: 10
// Output: 4
// Explanation:
// There are four good numbers in the range [1, 10] : 2, 5, 6, 9.
// Note that 1 and 10 are not good numbers, since they remain unchanged after rotating.

var rotatedDigits = function(N) {
  let counter = 0;
  let rotatedObj = {
    1: 1,
    2: 5,
    5: 2,
    6: 9,
    8: 8,
    9: 6,
    0: 0
  }

  let checkNumber = (n) => {
    let result = [];

    if (n === 1) {
      return;
    }

    nSplit = n.toString().split('');

    for (let i = 0; i < nSplit.length; i++) {
      if (rotatedObj.hasOwnProperty(nSplit[i])) {
        result.push(rotatedObj[nSplit[i]]);
      } else if (!rotatedObj.hasOwnProperty(nSplit[i])) {
        break;
      } else {
        result.push(nSplit[i]);
      }
    }

    if (result.length === nSplit.length && Number(result.join('')) !== n) {
      counter++;
    }
    checkNumber(n - 1);
  }
  checkNumber(N);
  return counter;
};

// Success
// Runtime: 120 ms, faster than 10.49% of JavaScript online submissions for Rotated Digits.
// Memory Usage: 45.6 MB, less than 10.49% of JavaScript online submissions for Rotated Digits.