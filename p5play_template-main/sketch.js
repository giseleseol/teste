var square;
function setup() {
  createCanvas(400,400);
  square = createSprite(200,200,30,30);
}

function draw() 
{
  background("black");
  if(keyIsDown(LEFT_ARROW)){
    square.position.x = square.position.x - 10;
  
  }
  if(keyIsDown(RIGHT_ARROW)){
    square.position.x = square.position.x + 10;
  }
  if(keyIsDown(UP_ARROW)){
    square.position.y = square.position.y - 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    square.position.y = square.position.y + 10;
  }
  drawSprites();
}




