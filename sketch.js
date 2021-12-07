var alien1, alien1Img;
var alien2, alien2Img
var planet, planetImg;
var blast, blastImg;
var alien1Group;

var rocket, rocket_shooting;
var stars, starsImg, starsGroup ;

var bullets;
var space, spaceImg;
var explosionSound;
var hitSound;

var gameState = "play"
var score = 0 ;



function preload(){
   spaceImg = loadImage("space.png")
   rocketImg = loadImage("rocket.png")
   alien1Img = loadImage("alien1.png")
   alien2Img = loadImage("alien2.png")
   starsImg = loadImage("stars.png")
   bulletsImg = loadImage("bullet1.png")
   planetImg = loadImage("alien3.png")
   explosionSound = loadSound("explosion.mp3");
   blastImg = loadImage("blast.png")
   hitSound = loadSound("hit.mp3")
}

function setup() {
    createCanvas(600, 600);
    space = createSprite(300, 200);
    space.velocityY = 2;
    space.addImage("space" , spaceImg);

    alien1Group = new Group();
    alien2Group = new Group();
    planetGroup = new Group();
    starsGroup = new Group();
    bulletGroup = new Group();

    rocket = createSprite(200, 200, 50, 50);
    rocket.scale = 0.3;
    rocket.addImage("rocket", rocketImg);
    
    

 
}

function draw() {
    background(0);

    edges= createEdgeSprites();
    rocket.collide(edges);
    

  if(gameState === "play"){

   if(keyDown("RIGHT_ARROW")){
       rocket.x = rocket.x+5
   }
   if(keyDown("LEFT_ARROW")){
       rocket.x = rocket.x-5
   }


   
 rocket.velocityY = rocket.velocityY + 0.8

 if(space.y>400){
     space.y = 300
 }
 spawnalien1();
 spawnalien2();
 spawnplanet();
 spawnstars();
 if(starsGroup.isTouching(rocket)){
  rocket.destroy();
  gameState = "end"
     
 }
 if(alien1Group.isTouching(rocket)){
     rocket.destroy();
     gameState = "end"
 }
 if(alien2Group.isTouching(rocket)){
  rocket.destroy();
  gameState = "end"
}
if(planetGroup.isTouching(rocket)){
  rocket.destroy();
  gameState = "end"
}





if(keyWentDown("space")){
  bullet = createSprite(rocket.x, rocket.y)
  bullet.addImage(bulletsImg)
  bullet.scale = 0.2;
  bullet.velocityY = -20;
  bulletGroup.add(bullet)
  rocketImg.depth = bullet.depth
  rocketImg.depth = rocketImg.depth-2
  explosionSound.play();
  
}
if(alien1Group.isTouching(bulletGroup)){
  for(var i=0;i<alien1Group.length;i++){     
     
      if(alien1Group[i].isTouching(bulletGroup)){
        blast= createSprite(bullet.x+60, bullet.y, 50,50);
        blast.addImage(blastImg)
        hitSound.play();
        blast.scale=0.3
        blast.life=20
        alien1Group[i].destroy();
        alien1Group.destroyEach();
        score+=5;
      }
  }
}
if(starsGroup.isTouching(bulletGroup)){
  for(var i=0;i<starsGroup.length;i++){     
     
      if(starsGroup[i].isTouching(bulletGroup)){
        blast= createSprite(bullet.x+60, bullet.y, 50,50);
        blast.addImage(blastImg)
        hitSound.play();
        blast.scale=0.3
        blast.life=20
        starsGroup[i].destroy();
        starsGroup.destroyEach();
        score+=5;
      }
  }
}



if(alien2Group.isTouching(bulletGroup)){
  for(var i=0;i<alien2Group.length;i++){     
     
      if(alien2Group[i].isTouching(bulletGroup)){
        blast= createSprite(bullet.x+60, bullet.y, 50,50);
        blast.addImage(blastImg)
        hitSound.play();
        blast.scale=0.3
        blast.life=20
        alien2Group[i].destroy();
        alien2Group.destroyEach();
        score+=5;
      }
  }
}
if(planetGroup.isTouching(bulletGroup)){
  for(var i=0;i<planetGroup.length;i++){     
     
      if(planetGroup[i].isTouching(bulletGroup)){
        blast= createSprite(bullet.x+60, bullet.y, 50,50);
        blast.addImage(blastImg)
        hitSound.play();
        blast.scale=0.3
        blast.life=20
        planetGroup[i].destroy();
        planetGroup.destroyEach();
        score+=5;
      }
  }
}



  
drawSprites();
}
text("SCORE: "+score, 30, 20);
stroke("white");
fill("white");

if(gameState === "end"){
    stroke("white");
    fill("white")
    text("GAME OVER" , 250, 250)
}




 }
  
function spawnalien1(){
if (frameCount % 500 === 0 ){
    var alien1= createSprite(100, -20)
    alien1.x = Math.round(random(100, 800));
    alien1.addImage(alien1Img);
    alien1.scale = 0.3;
    alien1.velocityY = 2;
    alien1Group.add(alien1)
    alien1.lifetime = 300;
}
}
function spawnalien2(){
  if (frameCount % 200 === 0 ){
      var alien2= createSprite(500, -20)
      alien2.x = Math.round(random(600, 300));
      alien2.addImage(alien2Img);
      alien2.scale = 0.05;
      alien2.velocityY = 2;
      alien2Group.add(alien2)
      alien2.lifetime = 300;
  }
  }
  function spawnplanet(){
    if (frameCount % 1000 === 0 ){
        var planet = createSprite(50, -20)
        planet.x = Math.round(random(128, 800));
        planet.addImage(planetImg);
        planet.scale = 0.5;
        planet.velocityY = 2;
        planetGroup.add(planet)
        planet.lifetime = 300;
    }
    }



function spawnstars(){
    if(frameCount % 400 === 0){
        var stars = createSprite(700, -20)
        stars.x = Math.round(random(120,400))
        stars.addImage(starsImg);
        stars.scale = 0.05;
        stars.velocityY = 2;
        starsGroup.add(stars)
        stars.lifetime = 300;
    }
}
 