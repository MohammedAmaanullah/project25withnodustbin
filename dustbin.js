class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.dustbin = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world, this.dustbin);
    }
    display(){
        var position = this.dustbin.position;
        push()
        translate(position.z, position.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}