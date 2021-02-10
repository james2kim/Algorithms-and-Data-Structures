/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var reverseList = function(head) {
    let current = head
    let prev = null 
    let next
    
    while (current !== null) {
        next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev

    
};
var removeNthFromEnd = function(head, n) {
    
    if (head.next === null) return null
    
    let reverse = reverseList(head)
    
    if (n === 1) {
        reverse = reverse.next
        return reverseList(reverse)
    }
    
 
    let counter = 1
    let current = reverse
    let previous = null
    while (counter !== n) {
        previous = current 
        current = current.next
        counter ++
    }
    previous.next = current.next
    return reverseList(reverse)    
    
};
