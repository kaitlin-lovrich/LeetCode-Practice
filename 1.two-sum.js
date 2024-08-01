/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let numberAndIndex = new Map();
    for (let i = 0; i < nums.length; i++) {
        const compliment = target - nums[i];
        if (numberAndIndex.has(compliment)) {
            return [numberAndIndex.get(compliment), i];
        } else {
            numberAndIndex.set(nums[i], i);
        }
    }
    return [];
};
// @lc code=end

// index
// compliment
// numberAndIndex (hash map) that stores key value pairs of the number and index of the number

// nums = [6, 2, 2] target = 4
// numberAndIndex = [{}]
