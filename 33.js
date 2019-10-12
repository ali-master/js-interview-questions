var k = 1;
if (1) {
	function foo() {}
	k += typeof foo;
}
console.log(k);

/**
 * A) 1undefined
 * B) SyntaxError
 * C) 1objects
 * D) EvalError
 * E) 1function
 * F) TypeError
 */
