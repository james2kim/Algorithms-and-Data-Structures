/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let hashmap = {}
    while (head !== null) {
        if (!hashmap.hasOwnProperty(head.val)) hashmap[head.val] = []
        if (head.next && hashmap[head.next.val] && hashmap[head.next.val].includes(head.next)) {
            return hashmap[head.next.val].find(value => value == head.next)
        }
        hashmap[head.val].push(head)
        head = head.next
    }
    return head
};
