/*
 * @lc app=leetcode id=1528 lang=javascript
 *
 * [1528] Shuffle String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
//  Create a new array with a length property value of s length
//  Loop through s with i initialized to 1
//  Store indices at index i in a variable, val
//  Assign s at i index to the value of ans at val index
//  Return ans
var restoreString = function (s, indices) {
    const ans = new Array(s.length);
    for (let i = 0; i < s.length; i++) {
        let val = indices[i];
        ans[val] = s[i];
    }
    return ans.join("");
};
// @lc code=end
