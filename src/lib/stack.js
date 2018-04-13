const Table = require('cli-table2');
const chalk = require('chalk');


class Node {
	constructor( data ) {
		this.data = data;
		this.next = null;
	}
}


class Stack {
	constructor() {
		this.top = null
	}

	push( item ){
		let node = new Node( item );

		if( this.top ) {
			node.next = this.top
			this.top = node;
		} else {
			this.top = node
		}
	}

	pop() {
		if( this.top ) {
			let itemToPop = this.top;
			this.top = this.top.next;
			return itemToPop.data;
		} else {
			console.log('Stack is empty!');
			return false;
		}
	}

	peek() {
		if( this.top ) {
			return this.top.data;
		} else {
			return null;
		}
	}

	print() {
		let current = this.top;
		while( current ) {
			console.log( current.data );
			current = current.next;
		}
	}

	reverse() {
		let current = this.top;
		let prev = null;
		while( current ) {
			let next = current.next
			current.next = prev
			prev = current
			current = next
		}
		this.top = prev
	}
	length() {
		let current = this.top;
		let counter = 0;
		while( current ) {
			counter++;
			current = current.next;
		}
		return counter;
	}

	search( item ) {
		let current = this.top;
		while( current ) {
			if( current.data === item ) return true
			current = current.next
		}
		return false;
	}

	traverse( fn ) {
		let current = this.top;
		while( current ) {
			fn( current );
			current = current.next
		}
	}

	isEmpty() {
		return this.length > 1
	}

	prettyPrint() {
		let current = this.top;
		let output = [ [ chalk.red('TOP') ] ];
		if( this.top ) {
			while( current ) {
				output.push( [ chalk.cyan(current.data) ] );
				current = current.next;
			}
		} else {
			output.push( [ chalk.red( 'Empty' ) ] );
		}
		let table = new Table({
		  chars: { 'top': ' ' , 'top-mid': '╤' , 'top-left': ' ' , 'top-right': ' '
		         , 'bottom': '─' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
		         , 'left': '│' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
		         , 'right': '│' , 'right-mid': '╢' , 'middle': '│' },
		   style:{ border:['yellow'] , 'padding-left' : 3, 'padding-right' : 3 },
		});
		table.push( ...output );
		console.log(table.toString());
	}
}

module.exports = Stack;