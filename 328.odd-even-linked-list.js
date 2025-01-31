/*
 * @lc app=leetcode id=328 lang=javascript
 *
 * [328] Odd Even Linked List
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
var oddEvenList = function (head) {
    if (!head || !head.next) return head; // Edge case: empty or single node list
    let odd = head; // Pointer to the last node in the odd list
    let even = head.next; // Pointer to the last node in the even list
    let evenHead = even; // Store the first even node for later connection
    while (even && even.next) {
        odd.next = even.next; // Skip even nodes
        odd = odd.next; // Move to the next odd node

        even.next = odd.next; // Skip odd nodes
        even = even.next; // Move to the next even node
    }
    odd.next = evenHead; // Connect the last odd node to the first even node
    return head; // Return the rearranged list
};
// @lc code=end
