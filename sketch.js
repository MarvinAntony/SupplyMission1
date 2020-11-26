var helicopterImg, helicopter, package,packageImg;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	helicopterImg=loadImage("helicopter.png")
	packageImg=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	package=createSprite(width/2, 80, 10,10);
	package.addImage(packageIMG)
	package.scale=0.2

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG)
	helicopter.scale=0.6

	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color("white")

	engine = Engine.create();
	world = engine.world;

	package = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);
	background("black");
	package.x= packageBody.position.x 
	package.y= packageBody.position.y 
	drawSprites();

	if(keyDown(DOWN_ARROW)) {
		Matter.Body.setStatic(packageBody,false);
		}	

	Engine.update(engine);
}