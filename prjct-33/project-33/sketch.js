var backgroundImg;
var snow1,snow2,snow3,snow4,snow5,snow6,snow7,snow8,snow9;
var snowImg
var snow10,snow11,snow12,snow13,snow14,snow15,snow16,snow17,snow18,snow19,snow20;







function preload(){
  backgroundImg=loadImage("snow3.jpg");
  snowImg = loadAnimation("snow25.png","Snow7.png");

  
}

function setup() {
  createCanvas(800,400);
  
  snow1 = createSprite(100,500,20,20); 
  snow1.addAnimation("s",snowImg); 
  snow1.scale = 0.2;

  snow2 = createSprite(200,100,20,20);
  snow2.addAnimation("s",snowImg);
  snow2.scale = 0.2;

  
}


function draw() {
  background(backgroundImg);
    

  drawSprites();
  }
