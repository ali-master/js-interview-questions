class Shop {
	public build(builder: CarBuilder | TruckBuilder | CustomCarBuilder) {
		builder.step1();
		builder.step2();

		return builder.get();
	}
}

class CarBuilder {
	private car: Car;
	private name: string;

	public step1() {
		this.car = new Car();
	}

	public step2() {
		this.car.addParts();
	}

	public get() {
		return this.car; // ? $
	}
}

class CustomCarBuilder {
	private car: Car;

	public step1() {
		this.car = new Car();
	}

	public step2() {
		this.car.addParts(3);
	}

	public get() {
		return this.car; // ? $
	}
}

class TruckBuilder {
	private truck: Truck;

	public step1() {
		this.truck = new Truck();
	}

	public step2() {
		this.truck.addParts();
		this.truck.addWindows();
	}

	public get() {
		return this.truck;
	}
}

class Car {
	public doors: number = 0;

	public addParts(doors?: number) {
		this.doors = doors || 4;
	}

	public say() {
		log.add("I am a " + this.doors + "-door car");
	}
}

class Truck {
	public doors: number = 0;
	public windows: number = 1;

	public addParts() {
		this.doors = 4;
	}

	public addWindows() {
		this.windows = 2;
	}

	public say() {
		log.add("I am a " + this.doors + "-door tuck"); // ? $
	}
}

// @ts-ignore
const log = (function() {
	let log: string[] = [];

	return {
		add(msg: string): void {
			log.push(msg);
		},
		show(): string {
			const tempLog = log.slice(0);
			log = [];

			return tempLog.join(" | ");
		},
	};
})();

var shop = new Shop();
var carBuilder = new CarBuilder();
var truckBuilder = new TruckBuilder();
var customCarBuilder = new CustomCarBuilder();
var car = shop.build(carBuilder); // ? $
var truck = shop.build(truckBuilder); // ? $
var customCar = shop.build(customCarBuilder); // ? $

car.say();
truck.say();
customCar.say();

log.show(); // ? $
