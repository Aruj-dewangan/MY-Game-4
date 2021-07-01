class bob{
    constructor(x,y,r){

        var option = {
            restitution:1,
            density:0.8
            
        }

        this.y=y;
        this.x=x;
        this.r=r;

        this.body=Bodies.circle(this.x,this.y,(this.r)/2,option);
        
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("lightGreen");
        ellipse(0,0,this.r,this.r);
        pop();
    }
}
