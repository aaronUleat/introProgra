var person = {
	first_name: "Default",
	last_name: "Default",
	getFullName: function() {
		return this.first_name + ' ' + this.last_name;
	}
}

var john = {
	first_name: 'John',
	last_name: 'Doe',
};

var jane = {
	first_name: 'Jane'
}
john.__proto__ =  person;
jane.__proto__ = person;

var a = {};
var b = function(){};
var c = [];

for( var prop in john ) {
	console.log( prop +   john[prop] );
}

var jane = {
	address: '111 main st',
	getFormalFullName: function() {
		return this.last_name + ' ' + this.first_name; 
	}
}

var jim = {
	getFirstName: function() {
		return first_name;
	}
}

_.extend(john, jane, jim);

console.log(john);
console.log(jane);
console.log(jim);


