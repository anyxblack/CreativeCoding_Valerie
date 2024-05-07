let x = 0;
let y = 0;
let x2 = 0;
let y2 = 0;

let move = 0;
let goingUp = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(55);
}

function draw() {
  background(0, 20);
  translate(width / 2-100, height / 2-100);

  x += 0.10;
  y += 0.05;
  x2 += 0.07;
  y2 += 0.09;

  let colorScale = 0.02;
  stroke(noise(frameCount*colorScale)*255, noise((frameCount+1000)*colorScale)*255, noise((frameCount+2000)*colorScale)*255);

  if (move >= 300) {
    goingUp = false;
  } else if (move <= -100){
    goingUp = true;
  }


  pointX = sin(x)*100;
  pointY = cos(y)*100;

  pointX2 = sin(y)*100;
  pointY2 = cos(x)*100;

  pointX3 = sin(x2)*100;
  pointY3 = cos(y2)*100;

  pointX4 = sin(y2)*100;
  pointY4 = cos(x2)*100;

  //stroke(noise(frameCount*colorScale)*255, noise((frameCount+800)*colorScale)*255, noise((frameCount+1600)*colorScale)*255);
  line(pointX + move, pointY + move, pointX2+300+move/4, pointY2+100);
  // stroke(noise(frameCount*colorScale)*255, noise((frameCount+1000)*colorScale)*255, noise((frameCount+2000)*colorScale)*255);
  line(-pointX - move, pointY + move, pointX2+300+move/4, -pointY2+100);
  // stroke(noise(frameCount*colorScale)*255, noise((frameCount+600)*colorScale)*255, noise((frameCount+1200)*colorScale)*255);
  line(pointX3 *-0.5 - move-50, pointY3 + move, pointX4+move+100, pointY4+50);


  move+= goingUp ? 1 : -1;
}
