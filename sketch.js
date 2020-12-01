var car,wall;
var speed,weight;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(255,255,255);  
  car=createSprite(50,200,50,50);
  wall=createsprite(1500,200,60,height/2);
  car.velocityX=speed;
  Deformation=
  car.ShapeColour=colour(rgb);
  if(wall.x-car.x<(car.width+wall.width)/2){
   car.velocityX=0;
   var Deformation=0.5*weight*speed*speed/22509;
   (if Deformation>180);
   {
     car.shapecolour=(255,0,0);
   }
   if (Deformation<180 && deformation>100);
     {
     car.shapeColour=(230,230,0);
     }
     if(deformation=>100);
     {
      car.shapeColour=(0,250,0);
     }
   
  }
  drawSprites();
}