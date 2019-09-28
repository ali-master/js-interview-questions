"use strict";
// Explain the difference between Object.freeze() vs const

const a = {
	name: "Akram",
	metadata: {
		age: 12,
	},
};
const b = {
	name: "Fatemeh",
	metadata: {
		age: 11,
	},
};

Object.freeze(a);

a.metadata.age = 11;
b.metadata.age = 10;

a.metadata.age; // ? $
b.metadata.age; // ? $

/**
 * A: type error, true
 * B: type error, false
 * C: true, true -> Soheil | Fatemeh
 * D: false, false
 * E: false, type error
 * F: false, true
 * G: true, false -> Akram
 * H: false, undefined
 * I: type error, undefined
 */
