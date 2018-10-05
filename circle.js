class Circle {
	constructor(side, place) {
		this.side = side;
		this.place = place;
		this.point = createVector(0, (-scl + spc) / 2);
		this.rotationspeed = radians(place / 4);
		this.rotation = 0;
		switch (side) {
			case "left":
				this.pos = createVector(0, place * scl);
				break;
			case "top":
				this.pos = createVector(place * scl, 0);
				break;
		}
	}

	process() {
		if (this.side == "top") {
			circles.left.forEach(c => {
				let x = this.point.x + scl / 2;
				let y = c.point.y + scl / 2;
				let pointpos = createVector(x, y);
				curves[c.place - 1][this.place - 1].update(pointpos);
				if (showdebug > 3) {
					push();
					translate(this.pos.x, c.pos.y);
					stroke(255, 255 / 2);
					strokeWeight(10);
					point(x, y);
					pop();
				}
			});
		}
	}

	move() {
		this.rotation -= this.rotationspeed;
		this.point.rotate(this.rotationspeed);
	}

	show() {
		push();
		if (showdebug > 0) {
			noFill();
			stroke(255);
			strokeWeight(2);
			ellipse(this.pos.x + scl / 2, this.pos.y + scl / 2, scl - spc, scl - spc);
		}
		if (showdebug > 1) {
			strokeWeight(7);
			translate(this.pos.x + scl / 2, this.pos.y + scl / 2);
			point(this.point.x, this.point.y);
		}
		if (showdebug > 2) {
			stroke(255, 255 / 2)
			strokeWeight(1);
			switch (this.side) {
				case "left":
					line(this.point.x, this.point.y, width, this.point.y);
					break;
				case "top":
					line(this.point.x, this.point.y, this.point.x, height);
					break;
			}
		}
		pop();
	}
}