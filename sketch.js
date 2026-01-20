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

// Simpler alternative
for(const name of names) {
	console.log(name)
}

// Alterantively without a for loop
console.log(names.join(" "));
console.log("====================")


// Remove or replace items at certain points
names.splice(1,1); // removes the middle (assuming 3)
console.log(names)
console.log("====================")
names.push('Mark') // need 1 more value
console.log(`Before splice: ${names}`)
names.splice(1,1, 'Nathan')
console.log(`After splice: ${names}`)


function setup() {
	createCanvas(500, 500);
	background(30);
	rectMode(CENTER);
}

function draw() {
	rect(250, 250, 100, 100);
}
