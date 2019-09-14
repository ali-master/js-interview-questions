// What's the output?

const bird = {
	size: "small",
};

const mouse = {
	name: "Mickey",
	small: true,
};

/*
	A: mouse.bird.size is not valid
	B: mouse[bird.size] is not valid
	C: mouse[bird["size"]] is not valid
	D: All of them are valid
*/
