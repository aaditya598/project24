var box1,box2,box3,wood,ground,ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;

 
function preload()
{
wood=loadImage("wood2.png")	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
   ground= new Ground(400,680,1000,20)
  
  ball=new Ball(200,669,14)
	box1=new Box(631,673,160,10)
  box2=new Box(550,630,10,100)
  box3=new Box(710,630,10,100)
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  box1.display();
  box2.display();
  box3.display(); 
  ball.display(); 
  drawSprites();
  text(mouseX+","+mouseY,mouseX,mouseX);
}
function keyPressed() { if (keyCode === UP_ARROW) { Matter.Body.applyForce(ball.body,ball.body.position,{x:13,y:-13}); } }



