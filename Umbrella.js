class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        
        this.image=loadImage("batman.png")
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
        //load Image for BestMan
        
    }

    display(){
        if(frameCount > 200){
        var pos = this.umbrella.position;
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        imageMode(CENTER);
        image(this.image,pos.x + 20,pos.y + 65,220,275);
        }
    }
}
