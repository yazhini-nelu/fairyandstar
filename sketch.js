var fairy ,fairyimg;
var star;
var starimg;



function preload()
{
  fairyimg=loadImage("images/fairy.png")
 starimg=loadImage("images/star.png")
}

function setup() {
	createCanvas(800, 750);
  fairy=createSprite(100,200,50,50)
 fairy.addImage(fairyimg)
 fairy.scale=0.1;

 star=createSprite(690,100,50,5)
 star.addImage(starimg)
 star.scale=0.1
star.velocityY=2
 var star_options = {
   restitution: 1.0
 }
}


function draw() {
  background("black");
  if (keyCode===(38)){
    fairy.velocityY=-4
  
  }
  if (keyCode===(40)){
    fairy.velocityY=4
    
  }
  if (keyCode===(39)){
    fairy.velocityX=4
    
  }
  if (keyCode===(37)){
    fairy.velocityX=-4
  }
  if (fairy.isTouching(star)){
    star.velocityY=0
    fairy.velocit=0
  }

  drawSprites();
  
}
