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
  //create listObj set to and empty obj
  //create a minSum variable set to Infinity
  //create result variable set to an empty array

  //iterate over the list1 arr
    //set the key to the value and the value as the index

  //iterate over list2 arr

    //if the value is in listObj
      //create sum equal to the index of current value and the value to the key in listObj
      //if sum is less than minSum
        //set value of minSum to sum
      //if listObj minSum is present
        //push onto the array
      //else
        //set listObj minSum to an array with the value present

  //return listObj[minSum]


};
