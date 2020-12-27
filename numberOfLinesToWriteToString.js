// 806. Number of Lines To Write String

// You are given a string s of lowercase English letters and an array widths denoting how many pixels wide each lowercase English letter is. Specifically, widths[0] is the width of 'a', widths[1] is the width of 'b', and so on.

// You are trying to write s across several lines, where each line is no longer than 100 pixels. Starting at the beginning of s, write as many letters on the first line such that the total width does not exceed 100 pixels. Then, from where you stopped in s, continue writing as many letters as you can on the second line. Continue this process until you have written all of s.

// Return an array result of length 2 where:

// result[0] is the total number of lines.
// result[1] is the width of the last line in pixels.


// Example 1:

// Input: widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = "abcdefghijklmnopqrstuvwxyz"
// Output: [3,60]
// Explanation: You can write s as follows:
// abcdefghij  // 100 pixels wide
// klmnopqrst  // 100 pixels wide
// uvwxyz      // 60 pixels wide
// There are a total of 3 lines, and the last line is 60 pixels wide.
// Example 2:

// Input: widths = [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = "bbbcccdddaaa"
// Output: [2,4]
// Explanation: You can write s as follows:
// bbbcccdddaa  // 98 pixels wide
// a            // 4 pixels wide
// There are a total of 2 lines, and the last line is 4 pixels wide.

var numberOfLines = function(widths, S) {
  let lineCounter = 1;
  let letterCount = 0;

  for (let i =  0; i < S.length; i++) {
    letterCount += widths[S.charCodeAt(i) - 97];

    if (letterCount > 100) {
      lineCounter++;
      letterCount = widths[S.charCodeAt(i) - 97];
    }
  }

  return [lineCounter, letterCount];
};

// Success
// Details
// Runtime: 80 ms, faster than 70.51% of JavaScript online submissions for Number of Lines To Write String.
// Memory Usage: 38.3 MB, less than 87.18% of JavaScript online submissions for Number of Lines To Write String.