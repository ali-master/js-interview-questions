var ali = {
	name: "ali",
	family: "torki",
	age: 12,
	height: 178,
	gender: "male",
};

function User(name, family, age, height, gender, job) {
	this.name = name;
	this.family = family;
	this.age = age;
	this.height = height;
	this.gender = gender;
	this.job = job || "";
}

const Akram = new User("Akram", "Najafi", 60, 80, "female", "Frontend Developer");

Akram;
