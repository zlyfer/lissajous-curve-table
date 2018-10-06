var scl = 80;
var fullwidth = false;
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
	if (circles.left[0].rotation.toFixed(1) == -TAU.toFixed(1)) {
		reset();
	}
}

function keyPressed() {
	switch (key) {
		case " ":
			showdebug += 1;
			if (showdebug > 4) {
				showdebug = 0;
			}
			break;
		case "Control":
			reset();
			break;
		case "ArrowUp":
			scl -= 10;
			reset();
			break;
		case "ArrowDown":
			scl += 10;
			reset();
			break;
		case "ArrowLeft":
			fullwidth = false;
			reset();
			break;
		case "ArrowRight":
			fullwidth = true;
			reset();
			break;
	}
}

function reset() {
	circles = {
		"left": [],
		"top": []
	};
	curves = [];
	let width2 = width;
	if (fullwidth == false) {
		width2 = height;
	}
	for (let i = 1; i < floor(height / scl); i++) {
		circles.left.push(new Circle("left", i));
	}
	for (let i = 1; i < floor(width2 / scl); i++) {
		circles.top.push(new Circle("top", i));
	}
	for (let i = 1; i < floor(height / scl); i++) {
		curves.push([]);
		for (let j = 1; j < floor(width2 / scl); j++) {
			curves[i - 1].push(new Curve(j * scl, i * scl));
		}
	}
}