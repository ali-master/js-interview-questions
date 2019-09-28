function passWordMngr() {
	var password = "12345678";
	this.userName = "John";
	return {
		pwd: password,
	};
}
// Block End
var userInfo = passWordMngr();
console.log(userInfo.pwd);
console.log(userInfo.userName);

/**
 * A) 12345678 Window
 * B) 12345678 John
 * C) 12345678 undefined
 * D) undefined undefined
 */
