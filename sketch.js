
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paper
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	paper = new Paper(200,450,70)
	groundObject=new ground(width/2+30,670,width+10,20);
	dustbinObj=new dustbin(1200,650);

	wall1 = new ground(1305,670,20,3300)
	wall1.shapecolor = "green"
	wall2 = new ground(1105,570,20,330)
	wall3 = new ground(1205,650,170,10)

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(230);
 
	paper.display()
	//paper.debug()
	wall3.display();
  	groundObject.display();
  	dustbinObj.display();
	//wall1.display();
	//wall2.display();
	//wall3.display();
}

function keyPressed(){
if (keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:1250,y:-1060});

}
}
