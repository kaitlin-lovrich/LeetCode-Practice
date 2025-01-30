/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// Declare two curr varibles for A and B
// Loop through both lists until both variables are the same. They will either be NULL or contain the intersection NODE
// Return one of the variables currA or currB, either works
var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null;
    let currA = headA;
    let currB = headB;
    while (currA !== currB) {
        currA = currA ? currA.next : headB; // Move to the other list if at the end
        currB = currB ? currB.next : headA;
    }
    return currA;
};
// @lc code=end
