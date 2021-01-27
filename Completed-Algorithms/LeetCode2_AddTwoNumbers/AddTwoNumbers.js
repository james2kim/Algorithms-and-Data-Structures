/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


// Create a Singly Linked class with a method of push. We can use this later to instance of this class


class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        let node = new ListNode(val)

        if(this.head === null) {
            this.head = node
            this.tail= this.head
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.length++
        return this
    }
    
}


// This problem is tricky because initially you think they want you to reverse the linked list values and then do the addition. However, what the problem is really asking for is to do the addition in the linked list in the opposite direction, meaning if we have a number larger than 9, we will carry the 1 over to the right hand side. Basically this problem should be called reverse addition. 

const addTwoNumbers = function(l1, l2) {
  // Create instance of SinglyLinkedList 
    let list = new SinglyLinkedList
  // initialize carry variable to keep track of what number we must shift to the right 
    let carry = 0
// Loop as long as there is a current.next not equal to null for both linked lists 
    while (l1 || l2) {
// for every iteration we will just do simple math between the two values of the linked list  
        let sum = 0
        if (l1) {
            sum += l1.val
            l1 = l1.next
        }
        
        if (l2) {
            sum += l2.val
            l2 = l2.next
        }
        
  // If carry was brought over from the previous iteration, we must add it to the sum
        if (carry > 0) {
            sum += carry
            carry = 0
        }
  // If the sum is greater than 9, we must choose to carry the first 1, and reassign the sum to the second digit of the two digit integer
        if (sum >= 10) {
            let temp = sum.toString().split('')
            carry = +temp[0]
            sum = +temp[1]
        }
  // We will add a node with the value sum to our linked list
        list.push(sum)
    }
  // In the event that there is a carry value from the last iteration, we must also create a node for this value and add it to the linked list 
    
    if (carry > 0) list.push(carry)
  
    return list.head
};
