// 1323. Maximum 69 Number
// 12/03/2020

// Given a positive integer num consisting only of digits 6 and 9.

// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

// Example 1:

// Input: num = 9669
// Output: 9969
// Explanation:
// Changing the first digit results in 6669.
// Changing the second digit results in 9969.
// Changing the third digit results in 9699.
// Changing the fourth digit results in 9666.
// The maximum number is 9969.
// Example 2:

// Input: num = 9996
// Output: 9999
// Explanation: Changing the last digit 6 to 9 results in the maximum number.
// Example 3:

// Input: num = 9999
// Output: 9999
// Explanation: It is better not to apply any change.

var maximum69Number  = function(num) {
  //input: number
  //output: number

  //create a maximum variable set to -Infinity
  //create numStr variable set to num to String
  //create a values variable set to keys of 0, 1, 2, 3 set to 3000, 300, 30, 3

  //iterate over the numStr variable
    //if the value is equal to '9'
      //set maximum to math max of maximum and num minus the values at i
    //else maximum to math.max of maximum and num plus values at i

  //return maximum
};
