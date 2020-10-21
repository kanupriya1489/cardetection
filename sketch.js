var car1 ,wall1,car2,car3,wall2,wall3;
var speed1 , weight1,speed2,speed3,weight2,weight3;
var p1,p2;
function setup() {
  createCanvas(1200,400);
  speed1 = random(55,90);
  speed2 = random(55,90);
  speed3 = random(55,90);
  weight1 = random(400,1500);
  weight2 = random(400,1500);
  weight3 = random(400,1500);
 
  car1 = createSprite(100, 100, 50, 50);
  car1.shapeColor = "white";
  car1.velocityX = speed1;
  car2 = createSprite(100, 200, 50, 50);
  car2.shapeColor = "white";
  car2.velocityX = speed2;
  car3 = createSprite(100, 300, 50, 50);
  car3.shapeColor = "white";
  car3.velocityX = speed3;
  p1 = createSprite(600,140,1200,10);
  p1.shapeColor = "blue";
  p2 = createSprite(600,260,1200,10);
  p2.shapeColor = "blue";
  wall1=createSprite(1195,200,10,400);
  wall1.shapeColor = "blue";
  wall2=createSprite(1195,200,10,400);
  wall2.shapeColor = "blue";
  wall3=createSprite(1195,200,10,400);
  wall3.shapeColor = "blue";
  
}

function draw() {
  background("black");  
  if (car1.x - wall1.x < car1.width/2 + wall1.width/2
 &&   wall1.x- car1.x <wall1.width/2 + car1.width/2){
 car1.velocityX = 0;
 var deformation = 0.5 *speed1*weight1  *speed1/22509;
 if (deformation>180){
   car1.shapeColor = color(255,0,0);
 }
 if (deformation<180 && deformation>100){
   car1.shapeColor=color(230,230,0);
 }
 if (deformation<100){
   car1.shapeColor = color(0,255,0);
 }
 }
 if (car2.x - wall2.x < car2.width/2 + wall2.width/2
  &&   wall2.x- car2.x <wall2.width/2 + car2.width/2){
  car2.velocityX = 0;
  var deformation = 0.5 *speed2*weight2  *speed2/22509;
  if (deformation>180){
    car2.shapeColor = color(255,0,0);
  }
  if (deformation<180 && deformation>100){
    car2.shapeColor=color(230,230,0);
  }
  if (deformation<100){
    car2.shapeColor = color(0,255,0);
  }
  }
  if (car3.x - wall3.x < car3.width/2 + wall3.width/2
    &&   wall3.x- car3.x <wall3.width/2 + car3.width/2){
    car3.velocityX = 0;
    var deformation = 0.5 *speed3*weight3  *speed3/22509;
    if (deformation>180){
      car3.shapeColor = color(255,0,0);
    }
    if (deformation<180 && deformation>100){
      car3.shapeColor=color(230,230,0);
    }
    if (deformation<100){
      car3.shapeColor = color(0,255,0);
    }
    }
  drawSprites();
}