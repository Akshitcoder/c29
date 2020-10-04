
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function setup() {
  createCanvas(1200,600);
 
  engine = Engine.create();
	world = engine.world;
  ground = Bodies.rectangle(3,590,20,20, {isStatic:true} );
  World.add(world, ground);
  slab  = Bodies.rectangle(500,300,20,20, {isStatic:true} );
  World.add(world, slab);
  slab2  = Bodies.rectangle(700,300,20,20, {isStatic:true} );
  World.add(world, slab2);
   slu = Bodies.rectangle(500,250,100,100, {isStatic:false} );
  World.add(world, slu);
  poly =new Polygon(200,300)
  slu2 = Bodies.rectangle(700,250,100,100, {isStatic:false} );
  World.add(world, slu2);
  slu3 = Bodies.rectangle(900,100,100,100, {isStatic:false} );
  World.add(world, slu3);
  slab3  = Bodies.rectangle(900,300,20,20, {isStatic:true} );
  World.add(world, slab3);
 
}

function draw() {
  Engine.update(engine)
  background('black');  
  rect(ground.position.x,ground.position.y,width,10);
  rect(slab.position.x,slab.position.y,200,10);
  rect(slab2.position.x,slab2.position.y,200,10);
  rect(slu.position.x,slu.position.y,60,60);
  rect(slu2.position.x,slu2.position.y,60,60);
  rect(slu3.position.x,slu3.position.y,60,60)
  rect(slab3.position.x,slab3.position.y,200,10);
  poly.display();
  drawSprites();
}