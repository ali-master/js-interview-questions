//What's the output?

for (var i = 0; i < 4; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1);
}

for (let i = 0; i < 4; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1);
}

/*
	A: 0 1 2 3 and 0 1 2 3
	B: 0 1 2 3 and 3 3 3 3
	C: 4 4 4 4 and 0 1 2 3
*/
