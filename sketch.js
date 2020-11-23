
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var ball1,ball2,ball3,ball4,ball5,box1;
var rope1,rope2,rope3,rope4;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	box=new box(width/2,height/4,width/7,20);

	ballDiameter=40;

	startballPositionX=width/2;
	startballPositionY=height/4+500;
	ball1=new ball(startballPositionX-ballDiameter*2,startballPositionY,ballDiameter);
	ball2=new ball(startballPositionX-ballDiameter,startballPositionY,ballDiameter);
	ball3=new ball(startballPositionX,startballPositionY,ballDiameter);
	ball4=new ball(startballPositionX+ballDiameter,startballPositionY,ballDiameter);
	ball5=new ball(startballPositionX+ballDiameter*2,startballPositionY,ballDiameter);


    var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
  
  
	  rope1=new rope(ball1.body,roof.body,-ballDiameter*2, 0)
  
	  rope2=new rope(ball2.body,roof.body,-ballDiameter*1, 0)
	  rope3=new rope(ball3.body,roof.body,0, 0)
	  rope4=new rope(ball4.body,roof.body,ballDiameter*1, 0)
	  rope5=new rope(ball5.body,roof.body,ballDiameter*2, 0)
  
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-45});

	}
}
function drawLine(constraint)
{
	ballPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(ballBodyPosition.x, ballBodyPosition.y, roofBodyX,roofBodyY);
}





