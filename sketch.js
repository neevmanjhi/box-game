var canvas;
var music;
var b1;
var b2;
var b3;
var b4;
var mb5;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    b1 = createSprite(699,585,200,30);
    b1.shapeColor="green";
    b2 = createSprite(490,585,200,30);
    b2.shapeColor="red";
    b3 = createSprite(280,585,200,30);
    b3.shapeColor="orange";
    b4 = createSprite(70,585,200,30);
    b4.shapeColor="blue";
    mb5 = createSprite(500,400,30,30);
    

    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
   
if(b1.isTouching(mb5)){
    mb5.shapeColor = rgb(255,128,0)
mb5.velocityX = 0;
}






    //create edgeSprite
b1.display();
b2.display();
b3.display();
b4.display();
mb5.display();
    //add condition to check if box touching surface and make it box
}
