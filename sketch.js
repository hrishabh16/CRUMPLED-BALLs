
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper1;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper1 = new paper(100,600)

	Engine.run(engine);
	
}


function draw() {
  	rectMode(CENTER);
 	background(230);
	 text("YOU SHOULD ALWAYS THROW THE TRASH IN DUSTBIN ",400,200)
	 text("PRESS LEFT ARROW TO MOVE LEFT AND TO MOVE RIGHT SIDE PRESS RIGHT ARROW",400,240)
	 fill("black")
	
	
  	groundObject.display();
  	dustbinObj.display();
	paper1.display();

}
function keyPressed(){
	if (keyCode === RIGHT_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
	}

	if (keyCode === LEFT_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:-85,y:-85});
	}
	
	
	
}

