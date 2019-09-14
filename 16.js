// What's the output?

var Employee = {
	company: "xyz",
};
var emp1 = Object.create(Employee);
delete emp1.company;

console.log(emp1.company);

/*
	A: undefined
	B: xyz
	C: ReferenceError
*/
