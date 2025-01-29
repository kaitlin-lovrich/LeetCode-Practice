/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // Sort the input array
    nums.sort((a, b) => a - b);
    const result = [];

    // Loop through the array
    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicates for the first number
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1; // Start of the two-pointer window
        let right = nums.length - 1; // End of the two-pointer window

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                // Found a triplet
                result.push([nums[i], nums[left], nums[right]]);

                // Move pointers and skip duplicates
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                // Move both pointers after finding a valid triplet
                left++;
                right--;
            } else if (sum < 0) {
                // If the sum is too small, move the left pointer
                left++;
            } else {
                // If the sum is too large, move the right pointer
                right--;
            }
        }
    }

    return result;
};
// @lc code=end
