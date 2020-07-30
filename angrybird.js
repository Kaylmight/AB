class Birdy{
    constructor(x,y){
        var option = {restitution:0.4}
        this.body = Bodies.rectangle(x,y,50,50,option);
        World.add(world, this.body);
  }
display(){
    var pos = this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill('red')
    rectMode(CENTER);
    rect(0, 0, 50, 50);
    pop();
}
}