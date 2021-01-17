lasers = [];
laserVel = [];


function updateLasers() {
    for (var i = 0; i < lasers.length; i++) {

        //check alien collisions
        for (var z = 0; z < alien.length; z++) {
            if (dist(lasers[i].x, lasers[i].y, alien[z].x, alien[z].y) < alienSize / 2) {
                alien[z] = createVector(random(0, width), random(0, height));
                alienVel[z] = p5.Vector.random2D().mult(random(0.25, 2.25));
                Score++;
            }
        }
        
        lasers[i].add(laserVel[i]);

        push();
        stroke("red");
        strokeWeight(5);
        line(lasers[i].x, lasers[i].y, lasers[i].x + laserVel[i].x * 4, lasers[i].y + laserVel[i].y * 4)
        pop();
    }
}

function keyPressed() {
    //console.log (keyCode); 
    if (keyCode == 32) {
        //laserSound.play();
        lasers.push(createVector(ship.x, ship.y));
        laserVel.push(p5.Vector.fromAngle(radians(heading)).mult(7));


    }
}