let lines,
  outros,
  markov,
  markov2,
  data1,
  data2,
  x = 80,
  y = 300;

let arr = ['Guten Tag', 'Hallo,', 'Hallo,', 'GUTER TAG', 'Ich hoffe, diese E-Mail erreicht Sie gut', 'Schönen Tag,', 'Herzlich,', 'Hallo'];

function preload() {
  gotham = loadFont("data/gotham.otf");

  data1 = loadStrings("data/alle.txt");
  data2 = loadStrings("data/alle2.txt");

  outro1 = loadStrings("data/Outro1.txt");
  outro2 = loadStrings("data/Outro2.txt");
}

function setup() {
  createCanvas(800, 800);
  textFont(gotham, 15);
  //textFont("Helvetica", 16);
  textLeading(21);
  textAlign(LEFT);

  lines = ["Erstelle eine Spam E-Mail, welche aus mehreren verschiedenen Texten besteht. \n\nKlicke den Button, um eine neue E-Mail zu generieren."];

  // create a markov model w' n=4
  markov = RiTa.markov(2);
  markov2 = RiTa.markov(2);

  // load text into the model
  markov.addText(data1.join(" "));
  markov.addText(data2.join(" "));

  markov2.addText(outro1.join(" "));
  markov2.addText(outro2.join(" "));

  button = createButton('Neue E-Mail');
  button.position(670, 610);
  button.mousePressed(generate);
  button.mouseOver(() => button.style('background-color', 'rgb(30, 50, 170)'));
  button.mouseOut(() => button.style('background-color', 'rgb(30, 89, 216)'));

  drawText();
}

function drawText() {
  background(250, 220, 0);
  noStroke();

  //Mail Background
  fill(255);
  rect(50, 100, width - 100, height - 250, 20);

  //Mail Header
  fill(66, 66, 66);
  rect(50, 100, width - 100, 55, 20, 20, 0, 0);

  //Mac Circles
  fill(220, 0, 0);
  ellipse(80, 130, 20, 20);
  fill(255, 230, 0);
  ellipse(110, 130, 20, 20);
  fill(0, 190, 0);
  ellipse(140, 130, 20, 20);

  //An, Betreff
  stroke(200);
  line(50, 195, width - 50, 195);
  line(50, 235, width - 50, 235);

  noStroke();
  fill(200);
  text("An:", 80, 182);
  text("Betreff:", 80, 222);
  
  fill(0);
  noStroke();
  text(lines.join(" "), x, y, 600, 230);
  text(outros, x, 550, 600, 20);
}

function generate() {
  let ran = floor(random(arr.length));
  lines = markov.generate(8);
  outros = markov2.generate();
  drawText();
  text(arr[ran], 80, 280);
}

function color() {
  button.style('background-color', 'rgb(255, 255, 255)');
}
