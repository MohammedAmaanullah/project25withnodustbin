
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1000,500);


	engine = Engine.create();
	world = engine.world

	ground = new Ground(350,450,1000,30);
	dustbin1 = new Dustbin(700,350,100,20);
	dustbin2 = new Dustbin(650,500,20,100);
	dustbin3 = new Dustbin(750,300,20,100);
	paper = new Paper(100,480,40,40);
}


function draw() {
  background(0);
  Engine.update(engine)
  
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:85,y:-85})
	}
}



