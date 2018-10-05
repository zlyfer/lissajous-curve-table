class Curve {
	constructor(x, y) {
		this.image = createImage(scl, scl);
		this.pos = createVector(x, y);
	}

	update(pos) {
		this.image.loadPixels();
		this.image.set(pos.x, pos.y, color(255));
		this.image.updatePixels();
	}

	show(x, y) {
		push();
		translate(this.pos.x, this.pos.y);
		image(this.image, 0, 0);
		pop();
	}

}