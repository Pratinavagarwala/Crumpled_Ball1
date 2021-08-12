var ball,ground,ob1,ob3,ob4;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	ball=new Ball(100,100,20)
	

	//Create a Ground
	ground = new Basket(width/2, 650, width, 10 );
 	

	basket1=new Basket(width/2,630,200,10);
	basket2=new Basket(500,600,10,100);
	basket3=new Basket(300,600,10,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  basket1.display();
  basket2.display();
  basket3.display();
  ball.display();
  ground.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball.body,ball.body.position,{x:20,y:-20});
    
  }
}



