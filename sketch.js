var moving,fixed
function setup() {
  createCanvas(800,400);
moving = createSprite(100,100,90,70);
fixed=createSprite(200,200,110,80);
moving.shapeColor="green";
fixed.shapeColor="green";
}

function draw() {
  background(0,0,0);
  moving.x=mouseX ; 
   moving.y=mouseY;
 if(moving.x-fixed.x<moving.width/2+fixed.width/2
 && fixed.x-moving.x<moving.width/2+fixed.width/2 
 && moving.y-fixed.y<moving.height/2+fixed.height/2
 &&  fixed.y-moving.y<moving.height/2+fixed.height/2){
  moving.shapeColor="yellow";
  fixed.shapeColor="yellow";
 }
 else{
  moving.shapeColor="green";
  fixed.shapeColor="green";
 }
  drawSprites();
}