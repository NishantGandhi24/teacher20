var astronaut,spaceship;
var bath,sleep,brush,drink,iss,eat,gym,move;
var edge,astro;

function preload(){
  //made mistake in loading animations its "bath1.png",bath2.png its not bath1.png,bath2.png"
  iss = loadImage("iss.png");
  bath = loadAnimation("bath1.png","bath2.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  drink = loadAnimation("drink1.png","drink2.png");
  eat = loadAnimation("eat1.png","eat2.png");
  gym = loadAnimation("gym1.png","gym2.png");
  move = loadAnimation("move.png","move1.png");
}

function setup() {
  createCanvas(1280,575);

  edge = createEdgeSprites();
//create a seperate sprite for space ship and astronaut
spaceship = createSprite(640,260,40,40);
spaceship.addImage(iss)
spaceship.scale = 0.3
//for spaceship use this x, y, width, height
  astronaut = createSprite(640,270,800,400);
  //use this scale
  astronaut.scale = 0.2;
  //add labels 
  astronaut.addAnimation("bathing",bath);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.addAnimation("brushing",brush);
  astronaut.addAnimation("drinking",drink);
  astronaut.addAnimation("eating",eat);
  astronaut.addAnimation("gyming",gym);
  astronaut.addAnimation("moving",move);
  astronaut.bounceOff(edge);
  

  
}

function draw() {
  //give a background
background("black")
//this is perfect



  if(keyDown("UP_ARROW")){
    //astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 280
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.changeAnimation("gyming");
    astronaut.y = 330;
  }
   
  if(keyDown("RIGHT_ARROW")){
    astronaut.changeAnimation("bathing");
    astronaut.y = 300;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.changeAnimation("eating");
    astronaut.y = 330;
  }
  if(keyDown("M")){
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 2;
    astronaut.velocityX = 2;  
  }

  drawSprites();


textSize(20);
fill("white");
text("Use Arrow Keys And M To See Astronaut's Daily Routine",430,60);
}