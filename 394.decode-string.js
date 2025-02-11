/*
 * @lc app=leetcode id=394 lang=javascript
 *
 * [394] Decode String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
//  Initialize 2 empty arrays to hold the number and string values
//  Initialize an empty string, currentStr to keep track of the current string
//  Initialize a num variable and set it to 0 to store the current num
//  Loop through each char of s
//  If number, build full number
//  If "[" push the current number and string onto their stacks
var decodeString = function (s) {
    let numStack = [];
    let strStack = [];
    let currentStr = "";
    let num = 0;

    for (let char of s) {
        if (!isNaN(char)) {
            // If it's a digit, build the full number
            num = num * 10 + Number(char);
        } else if (char === "[") {
            // Push the current number and string onto their stacks
            numStack.push(num);
            strStack.push(currentStr);
            num = 0; // Reset for the next number
            currentStr = ""; // Reset current string
        } else if (char === "]") {
            // Pop the last stored number and string
            let repeatTimes = numStack.pop();
            let previousStr = strStack.pop();
            // Use a while loop to append `currentStr` `repeatTimes` times
            let repeatedStr = "";
            while (repeatTimes > 0) {
                repeatedStr += currentStr;
                repeatTimes--;
            }
            currentStr = previousStr + repeatedStr;
        } else {
            // Normal character, append to current string
            currentStr += char;
        }
    }

    return currentStr;
};
// @lc code=end
