const DoublyLinkedList 	= require('./lib/doubleLinkedList');
const chalk 		= require('chalk');

// Initialize new Doubly Linked List
const doublyLinkedList = new DoublyLinkedList();

[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ].map( item => {
	// Append some items into list
	doublyLinkedList.append(item);	
})

// Before operations
console.log( '\n >> Initially the Doubly linked list is : ');
doublyLinkedList.prettyPrint();

// Append operation
console.log( '\n >> Append 99 to list : ', chalk.gray('doublyLinkedList.append(99)'));
doublyLinkedList.append(99);
doublyLinkedList.prettyPrint();

// AppendAt operation
console.log( '\n >> Append 10 at 2th index : ', chalk.gray('doublyLinkedList.appendAt(2, 10)'));
doublyLinkedList.appendAt(2, 10);
doublyLinkedList.prettyPrint();

// RemoveAt operation
console.log( '\n >> Remove item at 0th index : ', chalk.gray('doublyLinkedList.removeAt(0)'));
doublyLinkedList.removeAt(0);
doublyLinkedList.prettyPrint();

// Remove operation
console.log( '\n >> Remove 99 from the list : ', chalk.gray('doublyLinkedList.remove(99)'));
doublyLinkedList.remove(99);
doublyLinkedList.prettyPrint();

// Reverse operation
console.log( '\n >> Reverse the list : ', chalk.gray('doublyLinkedList.reverse()'));
doublyLinkedList.reverse();
doublyLinkedList.prettyPrint();

// Reverse operation
console.log( '\n >> Swap 2nd with 3rd item : ', chalk.gray('doublyLinkedList.swap( 2, 3 )'));
doublyLinkedList.swap( 2, 3 );
doublyLinkedList.prettyPrint();

// isEmpty operation
console.log( '\n >> Is list empty ? : ', chalk.cyan( doublyLinkedList.isEmpty() ));

// Length operation
console.log( '\n >> Length of list is : ', chalk.cyan( doublyLinkedList.length() ));

// Traverse operation
console.log( '\n >> Add 10 to each element : ', chalk.gray('doublyLinkedList.traverse( node => { node.data += 10; } );'));
doublyLinkedList.traverse( node => { node.data += 10; } );
doublyLinkedList.prettyPrint();

// Reverse operation
console.log( '\n >> Show every element from tail : ', chalk.gray('doublyLinkedList.traverseReverse(node => { console.log(node.data) });'));
doublyLinkedList.traverseReverse(node => { console.log( ' \t -> ',chalk.cyan( node.data ) ) });

// After operations
console.log( '\n >> Is 20 present ? :', doublyLinkedList.search(20) ? 'at ' + chalk.cyan(  doublyLinkedList.search(20) + ' index' ) : false);

// After operations
console.log( '\n >> Linked List in the end : ');
doublyLinkedList.prettyPrint();
