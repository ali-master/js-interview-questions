// What's the output?

function foo1() {
	return {
		bar: "bar",
	};
}

function foo2() {
	return;
	{
		("bar");
	}
}

console.log(foo1());
console.log(foo2());

/**
 * A: {bar: "bar"}, undefined
 * B: {bar: "bar"}, {bar}
 * C: undefined, undefined
 */
