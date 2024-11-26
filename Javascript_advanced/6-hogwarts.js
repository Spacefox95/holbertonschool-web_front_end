class studentHogwarts {
	constructor() {
		this.privateScore = 0;
		this.name = null;
	}

	#changeScoreby(point) {
		this.privateScore += point;
	}

	setName(newName) {
		this.name = newName;
	}

	rewardStudent() {
		this.#changeScoreby(1);
	}

	penalizeStudent() {
		this.#changeScoreby(-1);
	}

	getScore() {
		return `${this.name}: ${this.privateScore}`;
	}
}

let harry = new studentHogwarts();
harry.name = "Harry";
harry.rewardStudent(4);
console.log(harry.getScore());

let draco = new studentHogwarts();
draco.name = "Draco";
draco.rewardStudent(1);
draco.penalizeStudent(3);
console.log(getScore(draco));
