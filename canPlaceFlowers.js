// 605. Can Place Flowers

// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

var canPlaceFlowers = function(flowerbed, n) {
  if (flowerbed.length === 1 && flowerbed[0] === 0 && n === 1) return true
  for (let i = 0; i < flowerbed.length; i++) {
    if ((i === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) || (flowerbed[i] === 0 &&flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) ||  (i === flowerbed.length - 1 && flowerbed[i] === 0 &&flowerbed[i - 1] === 0)) {
      flowerbed[i] = 1;
      n -= 1;
      if (n === 0) return true
    }
  }
};

// Success
// Details
// Runtime: 80 ms, faster than 91.12% of JavaScript online submissions for Can Place Flowers.
// Memory Usage: 40.6 MB, less than 49.42% of JavaScript online submissions for Can Place Flowers.