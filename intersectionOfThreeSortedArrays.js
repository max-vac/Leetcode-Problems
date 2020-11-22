// 1213. Intersection of Three Sorted Arrays
// 11/22/2020

// Given three integer arrays arr1, arr2 and arr3 sorted in strictly increasing order, return a sorted array of only the integers that appeared in all three arrays.



// Example 1:

// Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]
// Output: [1,5]
// Explanation: Only 1 and 5 appeared in the three arrays.

var arraysIntersection = function(arr1, arr2, arr3) {
  let result = [];
  let obj = {};

  for (let i = 0; i < arr1.length; i++) {
    !obj[arr1[i]] ? obj[arr1[i]] = 1 : obj[arr1[i]]++;
    !obj[arr2[i]] ? obj[arr2[i]] = 1 : obj[arr2[i]]++;
    !obj[arr3[i]] ? obj[arr3[i]] = 1 : obj[arr3[i]]++;
  }

  for (let key in obj) {
    if (obj[key] === 3) {
      result.push(key)
    }
  }

  return result;
}

// Runtime: 84 ms, faster than 74.36% of JavaScript online submissions for Intersection of Three Sorted Arrays.
// Memory Usage: 41.7 MB, less than 11.54% of JavaScript online submissions for Intersection of Three Sorted Arrays.

