// 985. Sum of Even Numbers After Queries

// We have an array A of integers, and an array queries of queries.

// For the i-th query val = queries[i][0], index = queries[i][1], we add val to A[index].  Then, the answer to the i-th query is the sum of the even values of A.

// (Here, the given index = queries[i][1] is a 0-based index, and each query permanently modifies the array A.)

// Return the answer to all queries.  Your answer array should have answer[i] as the answer to the i-th query.

// Example 1:

// Input: A = [1,2,3,4], queries = [[1,0],[-3,1],[-4,0],[2,3]]
// Output: [8,6,2,4]
// Explanation:
// At the beginning, the array is [1,2,3,4].
// After adding 1 to A[0], the array is [2,2,3,4], and the sum of even values is 2 + 2 + 4 = 8.
// After adding -3 to A[1], the array is [2,-1,3,4], and the sum of even values is 2 + 4 = 6.
// After adding -4 to A[0], the array is [-2,-1,3,4], and the sum of even values is -2 + 4 = 2.
// After adding 2 to A[3], the array is [-2,-1,3,6], and the sum of even values is -2 + 6 = 4.

var sumEvenAfterQueries = function(A, queries) {
  //create result variable set to an empty array
  //create evenSum set to 0

  //iterate over the A array
    //if value is even
      //add value to evenSum


  //iterate over queries array
    //create val variable set to queries[i][0]
    //create index variable set to queries[i][1]

    //if A[index] is even and val is even or if A[index] is odd and val is odd
      //add val to evenSum
      //push evenSum to result array

    //update A[index] value

  //return result
};