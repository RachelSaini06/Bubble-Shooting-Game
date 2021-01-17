var bg;

function preload() {
    bg = loadImage("Images/outerSpace.png");
}



function setup() {
    createCanvas(1000, 600);
    ship = createVector(width / 2, height / 2)
    shipVel = createVector(0, 0);
    force = createVector(0, 0);
    size = 10;
    size2 = 5;
    heading = 0;
    boostColor = color("orange");
    shipColor = color(255,105,180);
    Score = 0;
    Health = 200;
    alien = [];
    alienVel = [];
    alienSize = 25;

    for (var i = 0; i < 10; i++) {
        alien.push(createVector(random(0, width), random(0, height)));
        alienVel.push(p5.Vector.random2D().mult(random(0.25, 2.25)));
    }
}

function draw() {
    background(bg);

    updateShip();
    updateAliens();
    updateLasers();

}