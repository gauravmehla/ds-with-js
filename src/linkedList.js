const LinkedList 	= require('./lib/linkedList');
const chalk 		= require('chalk');

// Initialize new Linked List
let linkedList = new LinkedList();

[ 1, 2, 3, 4, 1, 6, 7, 2, 9, 1 ].map( function( item ){
	// Append some items into list
	linkedList.append( item );
} );

// // Before operations
// console.log( '\n >> Initially the linked list is : ');
// linkedList.prettyPrint();

// // Append operation
// console.log( '\n >> Append 99 to list : ', chalk.gray('linkedList.append(99)'));
// linkedList.append(99);
// linkedList.prettyPrint();

// // AppendAt operation
// console.log( '\n >> Append 10 at 2th index : ', chalk.gray('linkedList.appendAt(2, 10)'));
// linkedList.appendAt(2, 10);
// linkedList.prettyPrint();

// // RemoveAt operation
// console.log( '\n >> Remove item at 0th index : ', chalk.gray('linkedList.removeAt(0)'));
// linkedList.removeAt(0);
// linkedList.prettyPrint();

// // Remove operation
// console.log( '\n >> Remove 99 from the list : ', chalk.gray('linkedList.remove(99)'));
// linkedList.remove(99);
// linkedList.prettyPrint();

// // Reverse operation
// console.log( '\n >> Reverse the list : ', chalk.gray('linkedList.reverse()'));
// linkedList.reverse();
// linkedList.prettyPrint();

// // Reverse operation
// console.log( '\n >> Swap 2nd with 3rd item : ', chalk.gray('linkedList.swap( 2, 3 )'));
// linkedList.swap( 2, 3 );
// linkedList.prettyPrint();

// // isEmpty operation
// console.log( '\n >> Is list empty ? : ', chalk.cyan( linkedList.isEmpty() ));

// // Length operation
// console.log( '\n >> Length of list is : ', chalk.cyan( linkedList.length() ));

// // Reverse operation
// console.log( '\n >> Add 10 to each element : ', chalk.gray('linkedList.traverse( node => { node.data += 10; } );'));
// linkedList.traverse( node => { node.data += 10; } );
// linkedList.prettyPrint();

// // After operations
// console.log( '\n >> Is 20 present ? :', linkedList.search(20) ? 'at ' + chalk.cyan(  linkedList.search(20) + ' index' ) : false);

// // After operations
// console.log( '\n >> Linked List in the end : ');
// linkedList.prettyPrint();


// linkedList.removeDuplicatesWithoutTemp();

let list1 = new LinkedList();
list1.append(8);
list1.append(3);
list1.append(1);

let list2 = new LinkedList();
list2.append(4);
list2.append(3);

console.log( linkedList.sum( list1.head.next, list2.head.next ) );
// linkedList.prettyPrint();



