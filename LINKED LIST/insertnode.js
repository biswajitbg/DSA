
// Insert a node at a specific position in a linked list

//For your reference:
 
//   SinglyLinkedListNode {
//      int data;
//      SinglyLinkedListNode next;
//   }
 
function insertNodeAtPosition(head, data, position) {
    
    if(!head || position===0){
        head = new SinglyLinkedListNode(data,null)
        return head;
    }
    
    let current = head;
    let i =1;
    while(current){
        if(i===position){
            let newNode = new SinglyLinkedListNode(data,null)
            newNode.next = current.next
            current.next = newNode;
            return head;
        }
        current = current.next
        i++;
        
    }
    // Write your code here

}




















//  Insert a node at the head of a linked list****************************************


/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtHead(head, data) {
    let newNode= new SinglyLinkedListNode(data)
    newNode.next = head;
    head = newNode;
    return head;
   
    
  }





  // Insert a Node at the Tail of a Linked List



  /*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtTail(head, data) {
    
    if(!head){
        head = new SinglyLinkedListNode(data,null)
        return head;
    }
      let last = head
    while(last.next){
        last = last.next;
        
      
    }
    last.next = new SinglyLinkedListNode(data,null)
    return head;
  
  }