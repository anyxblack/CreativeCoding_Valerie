let lines,
  outros,
  markov,
  markov2,
  data1,
  data2,
  x = 80,
  y = 300,
  posX,
  posYs;

let arr = ['Guten Tag', 'Hallo,', 'Hallo,', 'GUTER TAG', 'Ich hoffe, diese E-Mail erreicht Sie gut', 'Schönen Tag,', 'Herzlich,', 'Hallo'];

function preload() {
  gotham = loadFont("data/gotham.otf");

  data1 = loadStrings("data/alle.txt");
  data2 = loadStrings("data/alle2.txt");

  outro1 = loadStrings("data/Outro1.txt");
  outro2 = loadStrings("data/Outro2.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //translate((windowWidth - 800) / 2, (windowHeight - 800) / 2);

  textFont(gotham, 15);
  //textFont("Helvetica", 16);
  textLeading(21);
  textAlign(LEFT);

  lines = ["Erstelle eine Spam E-Mail, welche aus mehreren verschiedenen Texten besteht. \n\nKlicke den Button, um eine neue E-Mail zu generieren."];

  // create a markov model w' n=4
  markov = RiTa.markov(4);
  markov2 = RiTa.markov(2);

  // load text into the model
  markov.addText(data1.join(" "));
  markov.addText(data2.join(" "));

  markov2.addText(outro1.join(" "));
  markov2.addText(outro2.join(" "));

  button = createButton('Neue E-Mail');
  button.class('newMail');
  button.position(windowWidth/2 +200, windowHeight/2 + 240);
  button.mousePressed(generate);
  button.mouseOver(() => button.style('background-color', 'rgb(30, 50, 170)'));
  button.mouseOut(() => button.style('background-color', 'rgb(30, 89, 216)'));

  drawText();
}

function drawText() {
  posX = windowWidth/2 - 400;
  posY = windowHeight/2 - 300;

  background(250, 220, 0);
  noStroke();


  //Mail Background
  fill(255);
  rect(posX, posY, 750, 600, 20);

  //Mail Header
  fill(66, 66, 66);
  rect(posX, posY, 750, 55, 20, 20, 0, 0);

  //Mac Circles
  fill(220, 0, 0);
  ellipse(posX+30, posY+30, 20, 20);
  fill(255, 230, 0);
  ellipse(posX+60, posY+30, 20, 20);
  fill(0, 190, 0);
  ellipse(posX+90, posY+30, 20, 20);

  //An, Betreff
  stroke(200);
  line(posX, posY+95, posX+750, posY+95);
  line(posX, posY+135, posX+750, posY+135);

  noStroke();
  fill(200);
  text("An:", posX+30, posY+82);
  text("Betreff:", posX+30, posY+122);
  console.log(posX, posY);
  
  fill(0);
  noStroke();
  text(lines.join(" "), posX+30, posY+200, 650, 230);
  text(outros, posX+30, posY+450, 600, 20);
}

function generate() {
  let ran = floor(random(arr.length));
  lines = markov.generate(8);
  outros = markov2.generate();
  drawText();
  text(arr[ran], windowWidth/2 - 370, windowHeight/2 - 130);
}

function color() {
  button.style('background-color', 'rgb(255, 255, 255)');
}
