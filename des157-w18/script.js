// p5 file

console.log("this is a script.js comment");

function setup() {
  var myCanvas = createCanvas(800,250);
  //has to parent to an id
  myCanvas.parent('mySketch');
  background(68,56,84);
}

function draw(){
  rect(320,50,150,150);

  var s = 'S';
  textSize(80);
  textAlign(CENTER);
  textFont('Georgia');
  fill(224, 220, 244);
  text(s, 330, 80, 150, 150);

  if (mouseIsPressed) {
    fill(48, 38, 78);
  } else {
    fill(255);
  }
}
