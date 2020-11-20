// 771. Jewels and Stones
// 11/19/2020

// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: J = "aA", S = "aAAbbbb"
// Output: 3
// Example 2:

// Input: J = "z", S = "ZZ"
// Output: 0

var numJewelsInStones = function(J, S) {
  let obj = {};
  let counter = 0;

  for (const jewel of J) {
    console.log(jewel)
    obj[jewel] = jewel;
  }

  for (const stone of S) {
    if (obj.hasOwnProperty(stone)) {
      counter++;
    }
  }
  return counter;
};

// Success
// Details
// Runtime: 112 ms, faster than 5.29% of JavaScript online submissions for Jewels and Stones.
// Memory Usage: 42.2 MB, less than 5.67% of JavaScript online submissions for Jewels and Stones.