/*
 * @lc app=leetcode id=2095 lang=javascript
 *
 * [2095] Delete the Middle Node of a Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// First define fast and slow running pointers and a prev to store the previous node
// Loop through to find the middle node, captured in the slow pointer and assign slow to prev
// Assign prev's next pointer to slow's next node to skip the slow (middle) node, essentially deleting it
// Return head
var deleteMiddle = function (head) {
    let slow = head;
    let fast = head;
    let prev = null;
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = slow.next;
    return head;
};
// @lc code=end
