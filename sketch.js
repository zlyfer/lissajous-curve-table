const scl = 80;
const spc = 10;
var showdebug = 5;
var
	fps,
	circles,
	curves;

function preload() {}

function setup() {
	createCanvas(windowWidth, windowHeight);
	fps = createP("0");
	fps.position(10, 10);
	reset();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background(20);
	for (let side in circles) {
		circles[side].forEach(c => {
			c.process();
			c.show();
			c.move();
		})
	}
	for (let i = 0; i < curves.length; i++) {
		let curvei = curves[i];
		for (let j = 0; j < curvei.length; j++) {
			curveij = curvei[j];
			curveij.show();
		}
	}
	fps.html(frameRate().toFixed(1));
	if (circles.left[1].rotation.toFixed(1) == -(TAU.toFixed(1) * 2)) {
		reset();
	}
}

function keyPressed() {
	if (key == " ") {
		showdebug += 1;
		if (showdebug > 4) {
			showdebug = 0;
		}
	}
}

function reset() {
	circles = {
		"left": [],
		"top": []
	};
	curves = [];
	for (let i = 1; i < floor(height / scl); i++) {
		circles.left.push(new Circle("left", i));
	}
	for (let i = 1; i < floor(width / scl); i++) {
		circles.top.push(new Circle("top", i));
	}
	for (let i = 1; i < floor(height / scl); i++) {
		curves.push([]);
		for (let j = 1; j < floor(width / scl); j++) {
			curves[i - 1].push(new Curve(j * scl, i * scl));
		}
	}
}