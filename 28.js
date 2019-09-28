var employeeId = "aq123";

function Employee() {
	this.employeeId = "bq1uy";
}
console.log(new Employee().employeeId);
Employee.prototype.employeeId = "kj182";
Employee.prototype.JobId = "1BJKSJ";
console.log(new Employee().JobId);
console.log(new Employee().employeeId);

/**
 * A) bq1uy 1BJKSJ undefined
 * B) bq1uy 1BJKSJ bq1uy
 * C) bq1uy 1BJKSJ kj182
 * D) undefined 1BJKSJ kj182
 */
