var bullet,wall,speed,thickness,weight;

function setup() {
   createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
 bullet = createSprite(100,200,20,20);
 bullet.velocityX = speed;

}

function draw() {
  //background(300,300); 
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    bullet.x = 1160;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage>10){
      wall.shapeColor = "red";
    }

    if(damage<10){
      wall.shapeColor = "yellow";
    }
   }  
  


  drawSprites();
  }

function hasCollided(bullet1, wall1){
bulletRightEdge = bullet1.x+bullet1.width;
wallLeftEdge = wall1.x;
if(bulletRightEdge>=wallLeftEdge){
  return true
}
else{
return false;
}
}

