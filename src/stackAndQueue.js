const Stack 	= require('./lib/stack');
const Queue 	= require('./lib/queue');
const chalk 	= require('chalk');

/*
* 	Stack
*/

// Initialize new Stack
let stack = new Stack();

[ 1, 2, 3 ].map( function( item ){
	// Append some items into list
	stack.push( item );
} );

// Before operations
console.log( '\n >> Initially the Stack is : ');
stack.prettyPrint();

// Push operation
console.log( '\n >> Push 99 on Stack : ', chalk.gray('stack.push(99)'));
stack.push(99);
stack.prettyPrint();

// Pop operation
console.log( '\n >> Pop from Stack : ', chalk.gray('stack.pop()'));
stack.pop();
stack.prettyPrint();

// Peek operation
console.log( '\n >> Peek of Stack : ', chalk.gray('stack.peek()'));
console.log( '   ', chalk.cyan( stack.peek() ) );

// Reverse operation
console.log( '\n >> Reverse the Stack : ', chalk.gray('stack.reverse()'));
stack.reverse();
stack.prettyPrint();

// Length operation
console.log( '\n >> Length of Stack : ', chalk.gray('stack.length()'));
console.log( '   ', chalk.cyan( stack.length() ) );

// Search operation
console.log( '\n >> Is 33 present ? : ', chalk.gray('stack.search(33)'));
console.log( '   ', chalk.cyan( stack.search(33) ) );

// isEmpty operation
console.log( '\n >> Is stack empty ? : ', chalk.gray('stack.isEmpty()'));
console.log( '   ', chalk.cyan( stack.isEmpty() ) );

// Traverse operation
console.log( '\n >> Add 10 to all odd elements in the stack ? : ', chalk.gray('stack.traverse( item => { item.data % 2 != 0 ? item.data += 10 : item; })'));
stack.traverse( item => { item.data % 2 != 0 ? item.data += 10 : item; });
stack.prettyPrint();

/*
* 	Queue
*/

// Initialize new Queue
let queue = new Queue();

[ 1, 2, 3 ].map( function( item ){
	// Append some items into list
	queue.enqueue( item );
} );

// Before operations
console.log( '\n >> Initially the Queue is : ');
queue.prettyPrint();

// Enqueue operation
console.log( '\n >> Add 99 to Queue : ', chalk.gray('queue.enqueue(99);'));
queue.enqueue(99);
queue.prettyPrint();

// Dequeue operation
console.log( '\n >> Dequeue from Queue : ', chalk.gray('queue.dequeue()'));
queue.dequeue();
queue.prettyPrint();

// Length operation
console.log( '\n >> Length of Queue : ', chalk.gray('queue.length()'));
console.log( '   ', chalk.cyan( queue.length() ) );

// Peek operation
console.log( '\n >> Peek of Queue : ', chalk.gray('queue.peek()'));
console.log( '   ', chalk.cyan( queue.peek() ) );

// isEmpty operation
console.log( '\n >> Is queue empty ? : ', chalk.gray('queue.isEmpty()'));
console.log( '   ', chalk.cyan( queue.isEmpty() ) );

// Traverse operation
console.log( '\n >> Add 10 to all even elements in the queue ? : ', chalk.gray('queue.traverse( item => { item.data % 2 == 0 ? item.data += 10 : item; })'));
queue.traverse( item => { item.data % 2 == 0 ? item.data += 10 : item; });
queue.prettyPrint();
