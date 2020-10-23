
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var db1,db2,db3;
var pap;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1600, 700);
  engine = Engine.create();
    world = engine.world;  
  
   
    ground = new Ground(600,630,2000,20);
	db1=new Dustbin(1100,550,100,PI)
    db2=new Dustbin(1300,550,100,PI)
    db3=new Dustbin(1200,600,200,PI/2)
     papiu = new paper(100,600,16);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  db1.display()
 db2.display()
 db3.display()
 papiu.display()
  drawSprites();
  
}


function keyPressed(){
  if(keyCode === 38) {
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  }


}
