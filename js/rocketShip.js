var ship;
var size;
var size2;
var heading;
var shipVel;
var force;
var boostColor;
var touch;
var shipColor;
var Score;
var Health;

function updateShip() {
    boostColor = color(0, 255, 255, 1);

    //move and rotate ship 
    if (keyIsDown(LEFT_ARROW)) {
        heading -= 6;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        heading += 6;
    }
    if (keyIsDown(UP_ARROW)) {
        force = p5.Vector.fromAngle(radians(heading));
        shipVel.add(force.mult(0.2));
        boostColor = color(226, 88, 34, 1000);
    }

    //contain ship
    if (ship.x > 1000) {
        ship.x = 0
    }
    if (ship.x < 0) {
        ship.x = 1000
    }
    if (ship.y > 600) {
        ship.y = 0
    }
    if (ship.y < 0) {
        ship.y = 600
    }



    //update ship location
    shipVel.mult(0.978);
    ship.add(shipVel);

    //draw the ship
    push();
    translate(ship.x, ship.y);
    rotate(radians(heading));

    //flame
    fill(boostColor)
    strokeWeight(0);
    triangle(-size + 2, size * .7, -size * 3.5, size / 7, size * -.7, -size * .7);

    //adding details of ship
    fill("black");
    //triangle(-size - 10, -size - 1, size - 10, 0, -size - 1, size - 10);
    triangle(-size - 7, -size + 2, size - 7, -size + 7, -size - 7, size - 3);
    triangle(-size - 7, -size + 7, size - 7, -size + 11, -size - 7, size + 2);
    fill(shipColor);
    stroke("black");
    strokeWeight(2);
    triangle(-size + 1, -size + 1, size + 1, 0, -size + 1, size + 1);
    pop();

    //health
    fill(255);
    text(Health, ship.x - 10, ship.y + 25)

    //score
    fill(255);
    textSize(15);
    stroke("black");
    text("Score: " + Score, 15, 25);

}