const Table = require('cli-table2');
const Hashtable = require('./lib/hashing');
const HashTableWithChaining = require('./lib/hashingChaining');
const chalk = require('chalk');

// Initialize new Doubly Linked List
let hashTable = new Hashtable(7);

[ "Elon", "Steve", "Bill", "Linus" ].map( name => {
	hashTable.put( name );
})

// Before operations
console.log( '\n >> Initially the Hash Table is : ');
hashTable.prettyPrint();

// Put operation
console.log( '\n >> Put ' + chalk.cyan('Mark')+ ' in Hash Table : ', chalk.gray('hashTable.put("Mark")'));
hashTable.put('Mark')
hashTable.prettyPrint();

// Remove operation
console.log( '\n >> Remove ' + chalk.cyan('Elon')+ ' from Hash Table : ', chalk.gray('hashTable.remove("Elon")'));
hashTable.remove('Elon')
hashTable.prettyPrint();

// Search operation
console.log( '\n >> Is ' + chalk.cyan("Mark") +' present ? : ', chalk.gray('hashTable.search("Mark")'));
console.log( '   ', chalk.cyan( hashTable.search('Mark') ) );

// Length operation
console.log( '\n >> Size of Hash Table is : ', chalk.gray('hashTable.size()'));
console.log( '   ', chalk.cyan( hashTable.size() ) );

// isEmpty operation
console.log( '\n >> Is Hash Table empty ? : ', chalk.cyan( hashTable.isEmpty() ));
console.log();

/*
* Hash Table with Seperate chaining method
*/

// Initialize new Doubly Linked List
let hashTableWithChaining = new HashTableWithChaining(5);

[ 'Steve', 'Elon', 'Mark', 'Jeff', 'Shubham', 'Nikhil', 'Sarthak' ].map(name => {
	hashTableWithChaining.put( name );
})

// Before operations
console.log( '\n >> Initially the Hash Table is : ');
hashTableWithChaining.prettyPrint();

// Put operation
console.log( '\n >> Put ' + chalk.cyan('Gaurav')+ ' in Hash Table : ', chalk.gray('hashTableWithChaining.put("Gaurav")'));
hashTableWithChaining.put('Gaurav')
hashTableWithChaining.prettyPrint();

// Remove operation
console.log( '\n >> Remove ' + chalk.cyan('Shubham')+ ' from Hash Table : ', chalk.gray('hashTableWithChaining.remove("Shubham")'));
hashTableWithChaining.remove('Shubham')
hashTableWithChaining.prettyPrint();

// Contain operation
console.log( '\n >> Is ' + chalk.cyan("Mark") +' present ? : ', chalk.gray('hashTableWithChaining.contains("Mark")'));
console.log( '   ', chalk.cyan( hashTableWithChaining.contains('Mark') ) );

// Length operation
console.log( '\n >> Size of Hash Table is : ', chalk.gray('hashTableWithChaining.size()'));
console.log( '   ', chalk.cyan( hashTableWithChaining.size() ) );

// isEmpty operation
console.log( '\n >> Is Hash Table empty ? : ', chalk.cyan( hashTableWithChaining.isEmpty() ));
console.log();

console.log( '\n >> Lowercase each item : ', chalk.gray('doublyLinkedList.traverse( item => { item.data = item.data.toLowerCase(); } );'));
hashTableWithChaining.traverse( item => { item.data = item.data.toLowerCase(); });
hashTableWithChaining.prettyPrint();
