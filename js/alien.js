var alien;
var alienVel;
var alienSize;

function updateAliens() {
    touch = false;
    for (var i = 0; i < alien.length; i++) {
        push();

        //alien collisions 
        if (dist(alien[i].x, alien[i].y, ship.x, ship.y) < alienSize / 2) {
            touch = true;
            console.log(touch);
        }
        //updating alien locations
        alien[i].add(alienVel[i]);

        //contain alien
        if (alien[i].x > width + alienSize / 2) {
            alien[i].x = 0
        }
        if (alien[i].x < -alienSize / 2) {
            alien[i].x = 400
        }
        if (alien[i].y > height + alienSize / 2) {
            alien[i].y = 0
        }
        if (alien[i].y < -alienSize / 2) {
            alien[i].y = 400
        }

        fill(169, 169, 169);
        stroke(170, 170, 170);
        ellipse(alien[i].x, alien[i].y, 40, 20);
        fill(255, 255, 255, 45);
        ellipse(alien[i].x, alien[i].y - 10, 30, 25);
        fill(0, 255, 0, 200);
        noStroke();
        ellipse(alien[i].x, alien[i].y - 10, 10, 15);
        pop();
    }
    if (touch == true) {
        shipColor = color(255, 0, 0);
        Health--;
    } else {
        shipColor = color(255,105,180);
    }

}