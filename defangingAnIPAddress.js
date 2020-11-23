// 1108. Defanging an IP Address
// 11/23/2020

// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

var defangIPaddr = function(address) {
    let result = '';

    for (let i = 0; i < address.length; i++) {
      address[i] === '.' ?
        result += '[' + address[i] + ']' :
        result += address[i];
    }

    return result;
};

// Success
// Runtime: 68 ms, faster than 96.74% of JavaScript online submissions for Defanging an IP Address.
// Memory Usage: 38.3 MB, less than 68.22% of JavaScript online submissions for Defanging an IP Address.
