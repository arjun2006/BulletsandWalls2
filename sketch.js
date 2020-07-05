var wall, thickness;
var bullet, speed, weight;


function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50,200,20,50);
  wall=createSprite(1200,200,thickness,height/2);
  bullet.velocityX=speed;
wall.shapeColor=color(80,80,80);

}

function draw() {
  background(255,255,255);
 
if(0.5*weight*speed*speed/thickness*thickness*thickness<10){
  bullet.shapeColor="green"
}

if(0.5*weight*speed*speed/thickness*thickness*thickness>10){
  bullet.shapeColor="red"
}


bullet.collide(wall);
drawSprites();
  }

function hasCollided(lbullet, lwall) {
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}
