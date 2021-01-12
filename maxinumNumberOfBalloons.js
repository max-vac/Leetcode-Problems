// 1189. Maximum Number of Balloons

// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "leetcode"
// Output: 0

var maxNumberOfBalloons = function(text) {
  let balloonObj = new Set('balloon')
  let charObj = {};
  let count = Infinity;

  for (let char of text) {
    if ((char === 'l' || char === 'o') && balloonObj.has(char)) {
      !charObj[char] ? charObj[char] = .5 : charObj[char] += .5
    } else if (balloonObj.has(char)) {
      !charObj[char] ? charObj[char] = 1 : charObj[char]++
    }
  }

  for (let char of balloonObj) {
     if (!charObj[char]) {
        return 0;
    }
    count = Math.floor(Math.min(count, charObj[char] / 1))
  }
  return count;
};

// Details
// Runtime: 92 ms, faster than 31.82% of JavaScript online submissions for Maximum Number of Balloons.
// Memory Usage: 40.9 MB, less than 25.00% of JavaScript online submissions for Maximum Number of Balloons.