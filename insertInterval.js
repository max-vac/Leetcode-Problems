// 57. Insert Interval

// Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

// You may assume that the intervals were initially sorted according to their start times.

// Example 1:

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
// Example 3:

// Input: intervals = [], newInterval = [5,7]
// Output: [[5,7]]
// Example 4:

// Input: intervals = [[1,5]], newInterval = [2,3]
// Output: [[1,5]]

var insert = function (intervals, newInterval) {
  //create variable firstVal set to the first value of the newInterval
  //create variable secondVal set to the second value of the newInterval
  //if intervals has no length then return newIntervals in an array
  //if secondVal is smaller than the first value of the first bucket
  //unshift the newInterval to the intervals array
  //return intervals
  //if the firstVal is greater than the last buckets second value
  //push the newInterval onto the intervals array
  //return intervals
  //create variable index set to 0
  //create variable length set to the length of the intervals array
  //create variable results set to an empty array
  //while the index is less than length and the firstVal is greater than the second value of each bucket
  //push bucket into the results variable
  //increment the index val
  //while the index is less than the length and the secondVal is great than or equal to the first value of each bucket
  //set the firstVal to the Math.min between the firstVal and the current buckets first value
  //set the secondVal to the math.max between the secondVal and the current buckets second value
  //increment the index
  //push the bucket containing the firstVal and the secondVal into the results array
  //while the index is less than the length
  //push the bucket into the results array
  //increment the index
  //return the results variable
};
