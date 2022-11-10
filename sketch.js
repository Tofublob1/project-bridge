const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var ground 
var rope
var candyConstraint
var candy
let engine;
let world;

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  ground= new Ground(200,680,600,20)
  rope= new Rope(7,{x:245,y:30})
  candy_options={density:0.001}
  candy= Bodies.circle(300,300,20,candy_options)
  Matter.Composite.add(rope.body,candy)
  candyConstraint= new Link(rope,candy)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.display()
  rope.show()
   ellipse(candy.position.x,candy.position.y,30,30)
}




