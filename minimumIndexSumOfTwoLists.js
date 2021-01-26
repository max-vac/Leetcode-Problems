// 599. Minimum Index Sum of Two Lists

// Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.

// You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.

// Example 1:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
// Output: ["Shogun"]
// Explanation: The only restaurant they both like is "Shogun".
// Example 2:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
// Output: ["Shogun"]
// Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).
// Example 3:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Burger King","Tapioca Express","Shogun"]
// Output: ["KFC","Burger King","Tapioca Express","Shogun"]
// Example 4:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KNN","KFC","Burger King","Tapioca Express","Shogun"]
// Output: ["KFC","Burger King","Tapioca Express","Shogun"]
// Example 5:

// Input: list1 = ["KFC"], list2 = ["KFC"]
// Output: ["KFC"]

var findRestaurant = function(list1, list2) {
  let listMap = new Map();
  let minSum = Infinity;
  let result = [];
  for (let i = 0; i < list1.length; i++) {
    listMap.set(list1[i], i)
  }

  for (let k = 0; k < list2.length; k++) {
    if (listMap.has(list2[k])) {
      let sum = listMap.get(list2[k]) + k;
      if (sum < minSum) {
        result = [];
        result.push(list2[k]);
        minSum = sum
      } else if (sum === minSum) {
        result.push(list2[k])
      }
    }
  }
  return result;
};

// Success
// Details
// Runtime: 100 ms, faster than 92.33% of JavaScript online submissions for Minimum Index Sum of Two Lists.
// Memory Usage: 45.5 MB, less than 81.15% of JavaScript online submissions for Minimum Index Sum of Two Lists.