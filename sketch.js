var speed, weight;
var car, wall;
var deformation;

function setup() {
  createCanvas(1600,400);
  
  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height/2);

  car.velocityX = speed;
  car.shapeColor = "black";

  wall.shapeColor = "brown";

  deformation = (0.5*weight*speed*speed)/22500;
}

function draw() {
  background(255,255,255);  

  
  if(cC() && deformation < 100){
    car.shapeColor = "green";
    car.velocityX = 0;
  }
  if(cC() && deformation < 180){
    car.shapeColor = "yellow";
    car.velocityX = 0;
  }
  if(cC() && deformation > 180){
    car.shapeColor = "red";
    car.velocityX = 0;
  }
  car.depth = wall.depth+1;
  drawSprites();
}
function cC(){
if (wall.x - car.x < car.width/2+wall.width/2 &&
    car.x - wall.x < car.width/2+wall.width/2 &&
    car.y-wall.y < wall.height/2+car.height/2 &&
    wall.y-car.y < wall.height/2+car.height/2){

    return true;
 }
}