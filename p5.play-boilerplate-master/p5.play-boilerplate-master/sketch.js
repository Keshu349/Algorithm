var fixed
var moving 

function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  moving = createSprite(200,200,50,50);
}

function draw() {
  background(255,255,255);  
  moving.x = World.mouseX ;
  moving.y = World.mouseY ;

 if (moving.x - fixed.x < moving.width/2 + fixed.width/2
  && fixed.x - moving.x < moving.width/2 + fixed.width/2
  && moving.y - fixed.y < moving.height/2 + fixed.height/2
  && fixed.y - moving.y < moving.height/2 + fixed.height/2  ){
   
    fixed.shapeColor = "red";
    moving.shapeColor = "blue";
 }




  drawSprites();
}