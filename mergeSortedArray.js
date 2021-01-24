// 88. Merge Sorted Array

// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]

var merge = function(nums1, m, nums2, n) {
  m--;
  n--;
  let k = nums1.length - 1;

 while (k >= 0) {
   if (m < 0) {
       nums1[k] = nums2[n];
       n--
    } else if (n < 0) {
        nums1[k] = nums1[m]
        m--
    } else {
        if (nums1[m] > nums2[n]) {
            nums1[k] = nums1[m];
            m--;
        } else {
            nums1[k] = nums2[n];
            n--;
        }
    }
    k--;
  }
  return nums1;
};

// Success
// Details
// Runtime: 76 ms, faster than 84.96% of JavaScript online submissions for Merge Sorted Array.
// Memory Usage: 38.4 MB, less than 81.84% of JavaScript online submissions for Merge Sorted Array.