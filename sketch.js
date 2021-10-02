var jack,jackImg;
var beanStalk;
var bgImg,beanstalkImg;
var eggImg,eggGroup;
var spikes,spikesImg
var gameState="start"
var jackleft,jackright;
var lives=3
var score=0
var branchImg,branchGroup;
var branch;
var egg;
function preload(){
bgImg=loadImage("bg.jpg")
beanstalkImg=loadImage("beanstalkpic.png")
eggImg=loadImage("goldegg.png")
spikesImg=loadImage("spikes.jpg")
jackleft=loadImage("jack2.png")
jackright=loadImage("jack1.png")
branchImg=loadImage("branch.png")
}

function setup(){
createCanvas(800,400);
beanstalk=createSprite(400,200,50,700);
beanstalk.addImage(beanstalkImg)
beanstalk.shapeColor="green";
beanstalk.velocityY=3
jack=createSprite(365,350,20,50);
jack.scale=0.3
jack.addImage("jackR",jackright)
jack.addImage("jackL",jackleft)
branchGroup=new Group();
eggGroup= new Group();
spikes=createSprite(400,380,800,10)
spikes.addImage(spikesImg)
spikes.width=800
}

function draw(){
if(gameState==="start"){
background("#000066")

text("click space to begin",350,70)
textSize(30)
fill("gold")
text("JACK AND THE BEANSTALK",200,200)
text("by STAR",550,320)
if(keyCode===32){
gameState="play"
}
}
if(gameState==="play"){
background("lightblue");
image(bgImg,-100,0,1000,400)
spikes.velocityY=-0.2
textSize(20)
fill("red")
text("Lives "+lives,650,40)
text("Score "+ score,650,70)

if(beanstalk.y>250){
beanstalk.y=200
}
if(keyDown(UP_ARROW)){
jack.y-=3
}
if(keyDown(DOWN_ARROW)){
jack.y+=3
}
if(keyDown(RIGHT_ARROW)){
jack.x=440
jack.changeAnimation("jackL")
}
if(keyDown(LEFT_ARROW)){
jack.x=365
jack.changeAnimation("jackR")
}
branches();
goldenEgg();
if(branchGroup.isTouching(jack)){
lives-=1
branch.destroy()
}

if(eggGroup.isTouching(jack)){
   score+=1
   egg.destroy()
}

camera.position.x=jack.x
text(mouseX+", "+mouseY,mouseX,mouseY)
drawSprites();
}
}

function branches(){
 if(frameCount%60===0){
    branch=createSprite(300,0,80,10)
    var position=[350,450]
    branch.x=random(position)
    branch.velocityY=2
    branch.addImage(branchImg)
    branch.scale=0.2
    branchGroup.add(branch)
   }
}
function goldenEgg(){
   if(frameCount%200===0){
      egg=createSprite(200,0,10,10)
      egg.addImage(eggImg)
      egg.velocityY=1
      egg.scale=0.05
      var position=[380,420]
      egg.x=random(position)
      eggGroup.add(egg)
   }
}