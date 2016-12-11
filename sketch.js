var snake;
var scl = 20;
var bg;


var food;

function preload() {
  bg = loadSound("assets/bgmusic.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  snake = new Snake();
  frameRate(10);
  pickLocation();
  bg.play();
  bg.setVolume(0.4);
  textSize(50);
  text("Mute the music with 'P'", windowWidth, windowHeight);
}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(51);
  snake.death();
  snake.update();
  snake.show();

  if (snake.eat(food)) {
    pickLocation();
  }

  fill(117, 111, 111);
  rect(food.x, food.y, scl, scl)
}

window.onresize = function() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.dir(0, 1)
  } else if (keyCode === LEFT_ARROW) {
    snake.dir(-1, 0)
  } else if (keyCode === RIGHT_ARROW) {
    snake.dir(1, 0)
  }
}
