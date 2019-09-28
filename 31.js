function myFunc() {
	console.log(myFunc.message);
}
myFunc.message = "Hi John";

console.log(myFunc());

/**
 * A) Type Error
 * B) 'Hi John'
 * C) undefined
 * D) ReferenceError: this.message is not defined
 */
