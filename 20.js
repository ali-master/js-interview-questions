// What's the output?

var x = 5;

(function() {
	console.log(x);
	var x = 10;
	console.log(x);
})();

/**
 * A: 3, 10
 * B: undefined, 10
 */
