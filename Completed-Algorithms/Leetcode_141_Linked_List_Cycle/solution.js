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

var hasCycle = function(head) {
    let hashmap = {}
    while (head !== null) {
        if (head.next && hashmap[head.next.val] == head.next) {
            return true
        }
        hashmap[head.val] = head
        head = head.next
    }
    return false
};
