/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
//  Initialize 2 variables left and right to 0 and length - 1
//  While loop, with a condition that goes while left is less than right
//  Switch values. Assign the value at left index to the value at right index, same for right
//  Increment left and decrement right
//  Return input
var reverseString = function (s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        let leftVal = s[left];
        s[left] = s[right];
        s[right] = leftVal;
        left++;
        right--;
    }
    return s;
};
// @lc code=end
