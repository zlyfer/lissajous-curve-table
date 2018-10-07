class Curve {
	constructor(x, y) {
		this.shape = [];
		this.pos = createVector(x, y);
	}

	updateShape(pos) {
		this.shape.push(pos);
	}

	show(x, y) {
		push();
		translate(this.pos.x, this.pos.y);
		noFill();
		stroke(255);
		beginShape();
		this.shape.forEach(v => {
			vertex(v.x, v.y);
		});
		endShape();
		pop();
	}
}