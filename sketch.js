
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boundary1,spectatorsG,boundary2,boundary3,boundary4,boundary5;
var boundary6,boundary7,boundary8,boundary9,boundary12,boundary10,boundary11,boundary13,boundary14;
var boundary15,boundary16;
var player1,player2,player3,player4;
var ball;
var player1Img,player2Img
function preload()
{
	

}

function setup() {
	createCanvas(1400,800);
	/*engine = Engine.create();
	world = engine.world;
	Engine.run(engine);*/
	spectatorsG=createSprite(1200,500,300,500);
	spectatorsG.shapeColor="orange";
	

	boundary1 = createSprite(520,500,1000,500);
	boundary1.shapeColor="Green";
	boundary2=createSprite(90,500,3,500);
	boundary2.shapeColor="yellow";
	boundary3=createSprite(420,500,3,500);
	boundary3.shapeColor="yellow";
	boundary4=createSprite(600,500,3,500);
	boundary4.shapeColor="yellow";
	boundary5=createSprite(930,500,3,500);
	boundary5.shapeColor="yellow";
	boundary6=createSprite(520,300,1000,3);
	boundary6.shapeColor="yellow";
	boundary7=createSprite(520,695,1000,3);
	boundary7.shapeColor="yellow";
	boundary8=createSprite(520,500,1000,3);
	boundary8.shapeColor="yellow";
	boundary9=createSprite(520,250,1000,3);
	boundary9.shapeColor="yellow";
	boundary10=createSprite(1020,500,3,500);
	boundary10.shapeColor="yellow";
	boundary11=createSprite(520,750,1000,3);
	boundary11.shapeColor="yellow";
	boundary12=createSprite(20,500,3,500);
	boundary12.shapeColor="yellow";
	boundary13=createSprite(1200,250,300,3);
	boundary13.shapeColor="brown";
	boundary14=createSprite(1350,500,3,500);
	boundary14.shapeColor="brown";
	boundary15=createSprite(1200,750,300,3);
	boundary15.shapeColor="brown";
	boundary16=createSprite(1050,500,3,500);
	boundary16.shapeColor="brown";

	//player1=createSprite(800,600);
	//player1.shapeColor="red";
	player2=createSprite(800,400);
	player2.shapeColor="red";
	player3=createSprite(250,600);
	player3.shapeColor="red";
	//player4=createSprite(250,400);
	//player4.shapeColor="red";

	for(var i=250;i<=800;i=i+50){
		//line(500,i,500,i+=20) 
	  var ln = createSprite(510,i,3,10);
	  ln.shapeColor ="white";
	 }

	 ball=createSprite(510,500,40,40);
}


function draw() {
  //background(0);
 
 drawSprites();
}



