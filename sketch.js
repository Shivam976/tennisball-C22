//Name spacing
const Bodies = Matter.Bodies
const World = Matter.World
const Engine = Matter.Engine
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world
  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(width/2,height-10,width,20,options)
  World.add(world,ground)
  var ball_options={
    restitution:1
  }
  ball=Bodies.circle(200,100,20,ball_options)
  World.add(world,ball)
}

function draw() {
  background(0);  
  Engine.update(engine)
  fill("Red")
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,width,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}