let mic;
let midi_out;
let midi_enabled = false

function setup() {
  // let cnv = createCanvas(0,0);
  // cnv.mousePressed(userStartAudio);
  noCanvas();
  textAlign(CENTER);

  mic = new p5.AudioIn();

  mic.start();

  mic.connect();

  fft = new p5.FFT(0.8, 128);
  fft.setInput(mic)

}

var hydra = new Hydra({ canvas: document.getElementById("myCanvas") })

function draw() {

  micLevel = mic.getLevel();
  osc(60,-0.015,0.3).diff(osc(60,0.08).rotate(Math.PI/2))
  .modulateScale(osc(30).rotate(()=>Math.sin(time/2)),0.6*(micLevel*20)) //hier evtl. noch spielen
  .color(1,0.5,0.4).contrast(1.4)
  .add(src(o0).modulate(o0,20),.6)
  .invert().brightness(0.1).contrast(1.2)
  .modulateScale(osc(2),-0.2)
  .out()
}
/*function draw() {

  micLevel = mic.getLevel();
  osc(60,-0.015,0.3).diff(osc(60,0.08).rotate(Math.PI/2))
  .modulateScale(osc(15).rotate(()=>Math.sin(time/2)),0.6)
  .color(1,0.5,0.4).contrast(1.4)
  .add(src(o0).modulate(o0,.04*(micLevel*50)),.6*(micLevel*20))
  .invert().brightness(0.1).contrast(1.2)
  .modulateScale(osc(2),-0.2)
  .out()
}*/

