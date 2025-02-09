/*
 * @lc app=leetcode id=942 lang=javascript
 *
 * [942] DI String Match
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
//  Initialize an array, perm with a length of s plus 1
//  Initialize a left and right variable to 0 and s.length
//  Iterate through s and check if s[i] is eqal to I or D
//  If I, assign perm at index i to left and increment left
//  If else, assign perm at index i to right and decrement right
//  Set the last element of perm to left or right
//  Return perm
var diStringMatch = function (s) {
    const perm = new Array(s.length + 1);
    let left = 0;
    let right = s.length;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "I") {
            perm[i] = left;
            left++;
        } else {
            perm[i] = right;
            right--;
        }
    }
    // Set the last element
    perm[s.length] = left; // or `right`, since left === right at this point
    return perm;
};
// @lc code=end
