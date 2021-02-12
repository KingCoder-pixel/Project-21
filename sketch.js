var wall, bullet;

var speed, weight;

function setup() {
  createCanvas(1600,400);
  speed = random(100, 190);
  weight = random(30, 52);
  
  bullet = createSprite(50, 200, 90, 30);
  bullet.shapeColor = color(0, 0, 0);
  bullet.velocityX = speed;
   
  wall = createSprite(1400, 200, 40, height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(255,255,255);  

  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / 22500;
    
    if(damage>15)
    {
      bullet.shapeColor = color(255, 0, 0);
    }

    if(damage<15)
    {
      bullet.shapeColor = color(0, 255, 0);
    }
  }

  drawSprites();
}

