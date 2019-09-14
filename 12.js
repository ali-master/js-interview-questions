function getSwitchResult() {
	switch (24) {
		default:
			console.log("a");
			break;
		case 18:
		case 20:
			console.log("b");
			break;
		case 30:
			console.log("C");
			break;
	}
}

getSwitchResult(); // ? $

/**
 * A: a, b, c
 * B: a, b
 * C: b, c, a
 * D: b, a
 * E: a
 * F: b, a
 */
