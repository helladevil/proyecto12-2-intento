var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
 boy=LoadAnimation("Jake-1.png");
 boy=LoadAnimation("jake-4.png");
 path=LoadAnimation("path.png");
}

function setup(){
  
  createCanvas(400,400);
 var path=createSprite(200,200,100,100);

path.LoadAnimation("path.png");
//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
path.addImage("ground",groundImage);
path.y = ground = ground.width/2;
path.scale=1.2;

if (ground.y<0)
{
    ground.x = ground.width/2;
}

//crear sprite de boy (niño)
var boy=createSprite("200,500,50,50");
//agregar animación para boy
boy=LoadAnimation("jake1.png");
boy.scale=0.08;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
////establecer visibilidad como false (falso) para límite izquierdo
invisibleGround.visible= false;
//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
//establecer visibilidad como false (falso) para límite izquierdo
invisibleGround.visible= false;
}

function draw() {
  background(0);
  background=LoadAnimation("path.png");
  path.velocityY = 4;
  
  // boy moviéndose en el eje X con el mouse
  boy.x=World.mouseX;
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  if (boy.collide(rightBoundary)){
  boy.bounceOff;
  }
  if (boy.collide(leftBoundary)){

    boy.bounceOff;
    }
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  

  drawSprites();
}
