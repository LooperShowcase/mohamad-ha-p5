function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(1000, 600);
  angleMode(DEGREES);
}

function draw() {
  let seconds = second();
  let hours = hour();
  let minutes = minute();
  // The same as doing: background(220); or --> background(220,220,220);
  background(255, 255, 255);
  translate(650, 350);
  stroke("black");
  strokeWeight(7);
  ellipse(0, 0, 400);
  rotate(-90);
  //text (seconds+ ":" + hour + ":" + minutes;
  noFill();
  strokeWeight(8);
  stroke("black");
  let secondsArc = map(seconds, 0, 60, 0, 360);

  stroke("black");
  let minuteArc = map(minutes, 0, 60, 0, 360)+map(seconds, 0, 60, 0, 6);

  stroke("black");
  let hoursArc = map(hours % 12, 0, 12, 0, 360);

  push();
  strokeWeight(2);
  stroke("red");
  rotate(secondsArc);
  line(0, 0, 150, 0);
  pop();

  push();
  strokeWeight(5);
  stroke(0, 0, 0);
  rotate(minuteArc);
  line(0, 0, 125, 0);
  pop();

  push();
  strokeWeight(5);
  stroke(0, 0, 0);
  rotate(hoursArc);
  line(0, 0, 110, 0);
  pop();

  stroke("gold");
  point(0, 0);
  rotate(90);
  stroke("black");
  textSize(25);
  strokeWeight(2);

  text(12, -12, -170);

  text(1, 80, -145);

  text(7, -90, 155);
  text(6, 0, 175);
  text(9, -180, 0);
  text(3, 160, 0);
  text(2, 140, -85);
  text(8, -165, 85);
  text(10, -160, -85);
  text(11, -90, -138);
  text(4, 150, 85);
  text(5, 90, 150);
  rect(30, 20, 55, 55);
  text(seconds,45,55);
  stroke("black");
  text("Mohamad Hamdan",135,200);
}
