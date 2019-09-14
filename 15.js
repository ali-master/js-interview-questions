// What's the output?

var x = { foo: 1 };
var output = (function() {
	delete x.foo;
	return x.foo;
})();

console.log(output);

/*
	A: undefined
	B: 1
	C: ReferenceError
*/
