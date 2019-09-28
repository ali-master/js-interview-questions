// prettier-ignore

(function(){
	function sayHello(){
		var name = "Hi John";

		return 
		{
			fullName: name
		}
	}
	console.log(sayHello().fullName);
})();

/**
 * A) Hi John
 * B) undefined
 * C) Reference Error
 * D) Uncaught TypeError: Cannot read property 'fullName' of undefined
 */
