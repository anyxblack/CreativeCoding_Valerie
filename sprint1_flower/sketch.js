let a = 0;
let b = 0;
let c = 0;
let x = 0;
let y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, SVG);
  background(0);
  angleMode(DEGREES);
}

function draw() {
  translate(windowWidth / 2, windowHeight / 2);

  noFill();
  stroke(255);


  c += 0.35;
  x+=9.1;
  y+=1;

  if (c <=180){

    let wave3 = -sin(x)*10;
    let wave4 = cos(x)*10;
    let pointX4 = sin(c * 2) * 600;
    let pointY5 = cos(c * 2) * 600;
    ellipse(pointX4 + wave3, pointY5 - wave4, 300, 300);
  }

    if (b <= 90 && c > 180) {
      b += 0.35;
    let pointX2 = sin(b * 2) * 300;
    let pointY3 = cos(b * 2) * 300;
    let wave = sin(x)*20;
    let wave2 = cos(x)*20;

    ellipse(pointX2 + wave, pointY3 - wave2, 40, 40);
    ellipse(-pointX2 - wave, -pointY3 - wave2, 40, 40);
    ellipse(-pointX2 - wave, pointY3 - wave2, 40, 40);
    ellipse(pointX2 + wave, -pointY3 - wave2, 40, 40);
  } 
  


  if (a <= 36.1 && c > 180) {
    a += 0.3;
    let pointX1 = sin(a * 10) * 50;
    let pointY1 = cos(a * 5) * 160;

    for (let i = 0; i < 5; i++) {
    ellipse(pointX1, pointY1, 10, 10); 
    ellipse(pointX1, -pointY1, 10, 10);
    rotate(72);
    }

  } 



}
//save svg
function keyTyped() {
  if (key == 's') {
    let d=new Date();
    /* ~~~~~~~~~~~~ export SVG */
    save(d+".svg")
    noLoop();
  }
}