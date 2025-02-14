/*
 * @lc app=leetcode id=791 lang=javascript
 *
 * [791] Custom Sort String
 */

// @lc code=start
/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */

// init `freq` and assign a new Map object, use this to
// count the number a frequencies for each letter in s
// init `perm` to an empty array
// for each letter in `order`, if letter is in `s`, push letter to `perm` array
// iterate through `freq` and append any remaining characters not in `order`
// return perm in string format
var customSortString = function (order, s) {
    let freq = new Map();
    // Count occurrences of each character in s
    for (let char of s) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }
    let perm = [];
    // Append characters in order from "order" string
    for (let char of order) {
        if (freq.has(char)) {
            perm.push(char.repeat(freq.get(char)));
            freq.delete(char);
        }
    }
    // Append remaining characters that were not in "order"
    for (let [char, count] of freq) {
        perm.push(char.repeat(count));
    }
    return perm.join("");
};
// @lc code=end
