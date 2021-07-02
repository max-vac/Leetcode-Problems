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
  let firstVal = newInterval[0];
  let secondVal = newInterval[1];

  if (!intervals.length) return [newInterval];

  if (secondVal < intervals[0][0]) {
    intervals.unshift(newInterval);
    return intervals;
  }

  if (firstVal > intervals[intervals.length - 1][1]) {
    intervals.push(newInterval);
    return intervals;
  }

  let index = 0;
  let length = intervals.length;
  let results = [];

  while (index < length && firstVal > intervals[index][1]) {
    results.push(intervals[index]);
    index++;
  }

  while (index < length && secondVal >= intervals[index][0]) {
    firstVal = Math.min(firstVal, intervals[index][0]);
    secondVal = Math.max(secondVal, intervals[index][1]);
    index++;
  }

  results.push([firstVal, secondVal]);

  while (index < length) {
    results.push(intervals[index]);
    index++;
  }

  return results;
};

// Success
// Details
// Runtime: 76 ms, faster than 98.39% of JavaScript online submissions for Insert Interval.
// Memory Usage: 41.2 MB, less than 43.19% of JavaScript online submissions for Insert Interval.
