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
  //decrent m for proper index
  //decrement n for proper index
  //create variable k set to nums1.length minus 1

  //while k is greater than or equal to
    //if m is less than 0 (there are no more items in the array)
      //set the nums1 array at index k to nums2 at n
      //decrement n
    //else if n is less than 0 (there are no more items in the second array)
      //set the nums1 array at index k to nums1 at m
      //decrement m
    //else
      //if nums1 at index m is greater than nums2 at index n
        //set nums1 array at index k to nums1 at index m
        //decrement m
      //else
        //set nums1 at index k to nums2 at index n
        //decrement n

  //return nums1;
};