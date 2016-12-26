var snake;
var scl = 20;
var bg;
var sSlider;


var food;

function preload() {
//  bg = loadSound("assets/bgmusic.ogg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  snake = new Snake();
  frameRate(60);
  pickLocation();
//  bg.loop();
//  bg.setVolume(0.4);
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
  textSize(15);
  fill(65);
  text("Mute the music with 'P'", windowWidth/101, windowHeight/1.01);

  textSize(50);
  fill(60);
  textStyle(BOLD);
  text("Score: " + snake.total, windowWidth/2.5, windowHeight/2);

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

  if (keyCode === 80) {
    snake.dir(0, -1);
  }
}
