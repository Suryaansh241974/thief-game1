var thief;
var diamond;

var bodyGuard;
var thiefImage;
var diamondImage;

var bodyGuardImage;  

  function preload(){
thiefImage = loadImage ("images/thief.png");
diamondImage = loadImage ("images/diamond.png");
bodyGuardImage = loadImage ("images/bodyguard.png");


  }
  
 
  function setup() {
  createCanvas(800,400);
  

  thief = createSprite (50,350,100,100);
  thief.addImage("thiefImage",thiefImage);
  thief.scale=0.3;

  diamond = createSprite (770,50,100,100);
  diamond.addImage("diamondImage",diamondImage);
  diamond.scale=0.2;

  bodyGuard = createSprite (450,200,100,100);
  bodyGuard.addImage("bodyGuardImage",bodyGuardImage);
  bodyGuard.scale=0.3;
  bodyGuard.velocityX=20;

 
 

}

function draw() {
  background("blue"); 
  edges=createEdgeSprites(); 
  bodyGuard.bounceOff(edges[0]);
  bodyGuard.bounceOff(edges[1]);
  bodyGuard.bounceOff(edges[2]);
  bodyGuard.bounceOff(edges[3]);

  

if(keyDown("UP_ARROW")){
  thief.y=thief.y-10;
}

if(keyDown("DOWN_ARROW")){
  thief.y=thief.y+10;
}

if(keyDown("RIGHT_ARROW")){
  thief.x=thief.x+10;
}

if(keyDown("LEFT_ARROW")){
  thief.x=thief.x-10;
}



  drawSprites();
}