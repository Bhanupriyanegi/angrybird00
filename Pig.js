class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity=255;
 this.remove=false;
  }
display()
{
  //console.log(this.body.)
if((this.body.speed)<2.5)
{super.display();
}else
{
  if(this.remove===false){
World.remove(world,this.body)
score=score+50 
this.remove=true; 
  }

push();
this.Visiblity=this.Visiblity-5;
tint(255,this.Visiblity)

//do nothing
image(this.image,this.body.position.x,this.body.position.y,70,70)
pop();
}}
};


