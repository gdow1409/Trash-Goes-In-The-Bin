class Paper{
    constructor(x,y,r){
    var options={
      isStatic:false,
      restitution:0.3,
      friction:0.5,
      density:1.2

    } 

    this.x = x
    this.r = r
    this.y = y
    this.image = loadImage("paper.png")
    this.body=Bodies.circle(x,y,r,options);
    World.add(world, this.body);
    }
    display(){
    var paperPosition = this.body.position
    push()
    translate(paperPosition.x,paperPosition.y)
    imageMode(BOTTOM)
    image (this.image,0,0,this.r+0,this.r)
    
    pop ()

    }
}