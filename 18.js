// What's the output?

const a = {},
	b = { c: "b" },
	c = { b: "c" };

a[b] = 111;
a[c] = 333;
 ? $
console.log(a[b]);

/**
 * A: 111
 * B: 333
 * C: undefined
 * D: { c: "b" }
 */
