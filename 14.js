// What's the output?

var x = 0;
var output = (function() {
	delete x;
	return x;
})();

console.log(output);

/*
	A: undefined
	B: 0
	C: ReferenceError
*/
