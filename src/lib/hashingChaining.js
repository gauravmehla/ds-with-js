const Table = require('cli-table2');
const chalk = require('chalk');

class Node {
	constructor( data ){
		this.data = data;
		this.next = null;
	}
}

class HashTableWithChaining {
	constructor( size = 10 ) {
		this.table = new Array( size );
	}

	put( item ) {
		let key = this.computeHash( item );
		let node = new Node(item)
		if ( this.table[key] ) {
			let current = this.table[key]
			while( current.next ) {
				current = current.next
			}
			current.next = node;
		} else {
			this.table[key] = node
		}
	}

	remove( item ) {
		let key = this.computeHash( item );
		if( this.table[key] ) {
			if( this.table[key].data === item ) {
				this.table[key] = this.table[key].next
			} else {
				let current = this.table[key].next;
				let prev = this.table[key];
				while( current ) {
					if( current.data === item ) {
						prev.next = current.next
					}
					prev = current
					current = current.next;
				}
			}
		}
	}

	display() {
		let table = [];
		for(let i=0; i<this.table.length; i++){
			let list = [];
			if( this.table[i] ) {
				let current = this.table[i];
				while( current ) {
					list.push( current.data );
					current = current.next;
				}
			}
			table[i] = list
		}
		return table;
	}

	contains( item ) {
		for(let i=0; i<this.table.length; i++){
			if( this.table[i] ) {
				let current = this.table[i];
				while( current ) {
					if( current.data === item ) {
						return true;
					}
					current = current.next;
				}
			}
		}
		return false;
	}

	size( item ) {
		let counter = 0;
		for(let i=0; i<this.table.length; i++){
			if( this.table[i] ) {
				let current = this.table[i];
				while( current ) {
					counter++
					current = current.next;
				}
			}
		}
		return counter;
	}

	traverse( fn ) {
		for(let i=0; i<this.table.length; i++){
			if( this.table[i] ) {
				let current = this.table[i];
				while( current ) {
					fn( current );
					current = current.next;
				}
			}
		}
	}

	isEmpty() {
		return this.size() < 1
	}

	prettyPrint() {
		let table = this.display();
		for( let i = 0; i< table.length; i++){
			table[i].unshift( chalk.cyan(i + " ->") );
			let prettytable = new Table({
			  chars: { 'top': '─' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
			         , 'bottom': '─' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
			         , 'left': '│' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
			         , 'right': '│' , 'right-mid': '╢' , 'middle': '│' },
			   style:{ border:['yellow'] }
			});
			prettytable.push( table[i]);
			console.log(prettytable.toString());
		}
	}

	computeHash( string ) {
		let H = this.findPrime( this.table.length );
		let total = 0;
		for (let i = 0; i < string.length; ++i) {
	      	total += H * total + string.charCodeAt(i);
	   	}
		return total % this.table.length;
	}

	findPrime( num ) {
		while(true) {
			if( this.isPrime(num) ){ break; }
			num += 1
		}
		return num;
	}

	isPrime( num ) {
		for(let i = 2, s = Math.sqrt(num); i <= s; i++)
	        if(num % i === 0) return false; 
	    return num !== 1;
	}
}

module.exports = HashTableWithChaining