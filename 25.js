const o1 = true || true; // true
const o2 = false || true; // true
const o3 = true || false; // true
const o4 = false || 3 == 4; // false
const o5 = "Cat" || "Dog"; // Cat
const o6 = false || "Cat"; // Cat
const o7 = "Cat" || false; // Cat
const o8 = "" || false; // false
const o9 = false || "" || "salam"; // !False
const o10 = false || o9; // !False
