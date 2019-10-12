var y = 1;
if (function f() {}) {
	y += typeof f;
}
console.log(y);

/**
 * A) 1undefined
 * B) SyntaxError
 * C) 1object
 * D) EvalError -> Soheil | Akram
 * E) 1function
 * F) TypeError -> Fatemeh
 */
