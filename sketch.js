// Change the value inside an array given the length and specific index
let names = ['John', 'David', 'Mary'];
console.log(names);

names[1] = 'Brian';
console.log(names);
console.log("====================")

// Add an item to the end of an array
console.log(`Length (before): ${names.length}`)
names.push('Josh');
console.log(names);
console.log(`Length (after): ${names.length}`)
console.log("====================")

// Remove the last item in an array
names.pop();
console.log(names);
console.log("====================")

// Add a new item at the beginning of an array
names.unshift('Josh');
console.log(names);
console.log("====================")
// Remove the first item in an array
names.shift();
console.log(names);
console.log("====================")

// Loop through an array

for(let i = 0; i < names.length; i++) {
	console.log(names[i]);
}

// Alterantively
console.log(names.join(" "))
console.log("====================")


function setup() {
	createCanvas(500, 500);
	background(30);
	rectMode(CENTER);
}

function draw() {
	rect(250, 250, 100, 100);
}
