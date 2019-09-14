// What's the output?

let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting);

/*
	A: Hello
	B: Hey!
	C: undefined
	D: ReferenceError
	E: TypeError
*/
