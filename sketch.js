/*let x = 20;
let y = 0;


let move = 0;
let goingUp = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(55);
}

function draw() {
  background(0, 9);
  translate(0, height / 2);

  let colorScale = 0.02;
  stroke(noise(frameCount*colorScale)*255, noise((frameCount+1000)*colorScale)*255, noise((frameCount+2000)*colorScale)*255);
  stroke(0, 0, 255)
  strokeWeight(3);
  line(x * 20, sin(Math.abs(x)) * 200, x * 20 + 100, sin(Math.abs(x)) * 200);
  filter(BLUR, 1)

  x += (goingUp ? 0.08 : -0.08);


  if (x * 20 > windowWidth - 475) {
    goingUp = false;
  } else if (x * 20 < 0) {
    goingUp = true;
  }
}*/

let a = 28;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  frameRate(15)
}

function draw() {
  background(0);
  stroke(254, 1, 154);
  noFill();
  translate(width/2, height/2);
  a += 2;

  for (let i = 0; i < 360; i += 2) {
    let pointX = 150 * sin(i - a * 5);
    let pointY = 150 * cos(i - a * 2);
    ellipse(pointX, pointY, 125);
    
    }


}