var runner,runner2
var path,path2
function preload(){
  path2=loadImage("path.png")
  runner2=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(1000,500);
  
  
  path=createSprite(200,600,20,400)
  path.addImage("pathm",path2)
  
  runner=createSprite(200,350.20,50)
  runner.addAnimation("man",runner2)
  runner.scale=0.1
  
  path.y=path.height/2
}

function draw() {
  background(220);
  
  path.velocityY=5
  if(path.y>400){
    path.y=height/2
  }
  
 drawSprites()
}
