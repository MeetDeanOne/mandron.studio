let font;
let colour = 0;

let white = "#ffffff";
let grey = "#d2d7d7";
let black = "#0a0f14";
let green = "#00ff00";
let pink = "#ff2864";
let yellow = "e8ff00";
let blue = "#050096";
let lightblue = "#0078ff";

function preload() {
  font = loadFont("SpaceGrotesk-Medium.otf");
}

let data = [
  " ",
  "mandron.studio",
  "thinks",
  "designs",
  "generates",
  "connects",
  "create@mandron.studio",
];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (mouseIsPressed) {
    background(black);
    textAlign(CENTER, BOTTOM);
    fill(grey);
  } else {
    background(grey);
    fill(black);
  }

  let stepY = height / data.length;
  let fontSize = stepY * 0.9;

  textFont(font);
  textSize(fontSize);

  translate(0, 10);

  for (let i = 0; i < data.length; i++) {
    let wave = map(tan(radians(frameCount + i * 200)), -1, 1, -10, 20);

    push();
    translate(width / 2 + wave, i * stepY);
    text(data[i].toLowerCase(), 0, 0);
    pop();
  }
  noCursor();
  if (mouseIsPressed) {
    fill(pink);
    noStroke();
    rect(mouseX, mouseY, 75, 75);
  } else {
    fill(green);
    noStroke();
    ellipse(mouseX, mouseY, 75, 75);
  }
}
