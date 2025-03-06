/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
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
 * @param {ListNode} head
 * @return {boolean}
 */
// Cyle Detection Algorythm Solution
// Time Complexity: O(n)
// Space Complexity: O(1)
var hasCycle = function (head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) {
            return true;
        }
    }
    return false;
};
// @lc code=end

// Hash Table Solution:
// Time Complexity: O(n)
// Space Complexity: O(n) (extra memory used for storing nodes)
// var hasCycle = function (head) {
//     let visited = new Set();

//     while (head) {
//         if (visited.has(head)) return true; // Cycle detected
//         visited.add(head);
//         head = head.next;
//     }

//     return false;
// };

// Mark Visited Nodes Solution:
// Time Complexity: O(n)
// Space Complexity: O(1)
// var hasCycle = function (head) {
//     while (head) {
//         if (head.val === null) return true; // Cycle detected
//         head.val = null; // Mark as visited
//         head = head.next;
//     }
//     return false;
// };
// Issue: Modifies the list which might not be allowed

// Recursive Solution:
// Time Complexity: O(n)
// Space Complexity: O(n) (Recursive call stack)
// var hasCycle = function (head, visited = new Set()) {
//     if (!head) return false;
//     if (visited.has(head)) return true; // Cycle detected

//     visited.add(head);
//     return hasCycle(head.next, visited);
// };
// Issue: Recursion uses extra stack space, which could cause stack overflow for large lists.
