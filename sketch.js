var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var particle =0;
function setup() {
  createCanvas(800, 630);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  for (var k = 0; k <=1180; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/4, 10, divisionHeight));
  }
  

  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,80));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,160));
  }

  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,240));
  }
  
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,320));
  }
 
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  if(frameCount%80===0){
    particles.push(new balls(random(250, 550), 50));
    particle++;
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
  //textSize(20);
  //text("10          20          30          40           50           60          70          80          90          100  ",30,600)
  textSize(30);
  text("Particle - "+particle,20,40);
  
  fill(random(0, 255), random(0, 255), random(0, 255))
  textSize(30);
  text("The Plinko Game",300,40)
  

}