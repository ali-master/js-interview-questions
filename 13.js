function foo(x) {
	x.push(4);
	x; // ? $

	x = [4, 5, 6];
	x.push(7);

	x; // ? $
}

var a = [1, 2, 3];

foo(a);

a; // ? $
