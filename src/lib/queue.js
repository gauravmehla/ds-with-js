const Table = require('cli-table2');
const chalk = require('chalk');


class Node {
	constructor( data ) {
		this.data = data;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.tail = null;
		this.head = null;
	}

	enqueue( item ) {
		let node = new Node( item );

		if( !this.head  ) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
	}

	dequeue() {
		if( !this.head ) {
			return 'No item';
		} else {
			let itemToPop = this.head;
			this.head = this.head.next;
			return itemToPop;
		}
	}

	display() {
		let current = this.head;
		while( current ) {
			console.log( current.data );
			current = current.next;
		}
	}

	length() {
		let current, counter;
		[ current, counter ] = [ this.head, 0 ]
		while( current ) {
			counter++;
			current = current.next;
		}
		return counter;
	}

	peek() {
		if( this.head ) {
			return this.head.data
		} else {
			return 'Empty'
		}
	}

	isEmpty() {
		return this.length() < 1
	}

	traverse( fn ) {
		let current = this.head;
		while( current ) {
			fn( current );
			current = current.next
		}
	}

	prettyPrint() {
		let current = this.head;
		let output = [ chalk.red('Head') + ' ->' ];
		if( this.head ) {
			while( current ) {
				output.push( chalk.cyan(current.data) );
				current = current.next;
			}
		} else {
			output.push( chalk.red( 'Empty' ) );
		}
		let table = new Table({
		  chars: { 'top': '─' , 'top-mid': '╤' , 'top-left': ' ' , 'top-right': ' '
		         , 'bottom': '─' , 'bottom-mid': '╧' , 'bottom-left': ' ' , 'bottom-right': ' '
		         , 'left': ' ' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
		         , 'right': ' ' , 'right-mid': '╢' , 'middle': '│' },
		   style:{ border:['yellow'] , 'padding-left' : 3, 'padding-right' : 3 },
		});
		output.push( '<- ' + chalk.red('Tail') );
		table.push( output );
		console.log(table.toString());
	}
}

module.exports = Queue;