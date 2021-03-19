const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16
var ground
var ball,balli
var shot

function preload()
{
  balli = loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground(width/2-10, height/2+150, 200, 20);
 

  box1 = new Box(width/2, height/2+120, 30, 40);
  box2 = new Box(width/2, height/2+120, 30, 40);
  box3 = new Box(width/2-45, height/2+120, 30, 40);
  box4 = new Box(width/2+45, height/2+120, 30, 40);
  box5 = new Box(width/2-75, height/2+120, 30, 40);
  box6 = new Box(width/2+75, height/2+120, 30, 40);
  box7 = new Box(width/2-105, height/2+120, 30, 40);
  box8 = new Box(width/2+15, height/2+80, 30, 40);
  box9 = new Box(width/2-15, height/2+80, 30, 40);
  box10 = new Box(width/2+45, height/2+80, 30, 40);
  box11 = new Box(width/2-45, height/2+80, 30, 40);
  box12 = new Box(width/2-75, height/2+80, 30, 40);
  box13 = new Box(width/2-15, height/2+40,30, 40);
  box14 = new Box(width/2+15,height/2+40,30, 40);
  box15 = new Box(width/2-45, height/2+40,30, 40);
  box16 = new Box(width/2-15, height/2+10, 30, 40);


  ball = Bodies.circle(50, 200, 10);
  World.add(world, ball);

  shot = new Shot(this.ball,{x:200,y:100});
}
function draw() {
    background(57,43,44);  
    Engine.update(engine);
    ground.display();
  
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
   // ball.display(); 
  imageMode(CENTER);
  image(balli, ball.position.x, ball.position.y, 40, 40);
    shot.display();
    
}
function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

function mouseReleased(){
shot.re();
}
function keyPressed(){
  if(keyCode===32){
      shot.attach(this.ball)
    }
  }