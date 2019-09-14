// What's the output?

let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);
/*
	A: true false true
	B: false false true
	C: true false false -> Soheil | Fatemeh √
	D: false true true -> Akram
*/
