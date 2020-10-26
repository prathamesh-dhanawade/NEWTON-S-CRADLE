
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.constraint;

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);
	roofSprite=createSprite(400, height-505, 300,30);
	roofSprite.shapeColor=color("gray")

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = Bodies.rectangle(400, 650, 300, 30 , {isStatic:true} );
	World.add(world, roof);

	Engine.run(engine);
	bob = new Bob(200,450,50);
	rope = new Rope(bobObject1.body,roofSprite.body, -bobDiameter*2,0);

}


function draw() {
  rectMode(CENTER);
  background(255);
  rope.display();
  bob.display();
  drawSprites();
 
}



