var canvas;
var boy , boyImage,box;
var boy2,boy3,boy4,boy5,boy6;
var boyPosition = 6;
var booster;
var boyGrp;

function preload(){
  boyImage = loadImage("Images/boy.png")
}

function setup(){
  canvas = createCanvas(550,700);
  boy = createSprite(275,600,10,10);
  boy.addImage(boyImage);
  boy.scale = 0.5;
  boy2 = createSprite(100,400,10,10);
  boy2.addImage(boyImage);
  boy2.scale = 0.5;
  boy3 = createSprite(500,100,10,10);
  boy3.addImage(boyImage);
  boy3.scale = 0.5;
  boy4 = createSprite(300,-200,10,10);
  boy4.addImage(boyImage);
  boy4.scale = 0.5;
  boy5 = createSprite(200,-500,10,10);
  boy5.addImage(boyImage);
  boy5.scale = 0.5;
  
  boyGrp = new Group();
  
}


function draw(){
  background(255);

  boy2.velocityY = -2;
  boy3.velocityY = -4;
  boy4.velocityY = -8;
  boy5.velocityY = -12;
 
  text("Position :" + boyPosition , 250, camera.position.y)
  if(boy.y < boy2.y){
    boyPosition = 5;
  }
  if(boy.y < boy3.y){
    boyPosition = 4;
    boy.y = boy.y-0.1;
  }
  if(boy.y < boy4.y){
    boyPosition = 3;
    boy.y = boy.y-0.3;
  }
  if(boy.y < boy5.y){
    boyPosition = 2;
    boy.y = boy.y-0.5;
  }
 
  boyGrp.add(boy);
  boyGrp.add(boy2);
  boyGrp.add(boy3);
  boyGrp.add(boy4);
  boyGrp.add(boy5);
  boyGrp.add(boy6);

if(booster.isTouching(boyGrp)){
  position = 0;
}

  if(keyDown("UP_ARROW")){
    boy.y = boy.y-10
  }
 if(keyDown("LEFT_ARROW")){
    boy.x+= -5;
  }
  if(keyDown("RIGHT_ARROW")){
    boy.x+= 5
  }
  if(keyDown("r")){
    box = createSprite(boy.x, camera.position.y+200,20,20);
    box.velocityY = -35
  }
 /* if(keyDown("l")){
    box.velocityX= +5;
    box.velocityY = -5;
  }*/

  bosteer();
  camera.position.y = boy.y-250;
  drawSprites();
  
}

function bosteer(){
  if (frameCount % 260 == 0){
    booster = createSprite(Math.round(random(100,500)),camera.position.y-340,40,40);
  }

}