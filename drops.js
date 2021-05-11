class Drops{

    constructor(x,y){
  
     var opt = {
  
         friction : 0.1,
         restitution : 0,
         density : 1,
         isStatic : false
     }
  
     this.body = Bodies.circle(x,y,2,opt);
     World.add(world,this.body);
  
    }
  
    update_pos(){
  
    if(this.body.position.y > 700){
    
    Matter.Body.setPosition(this.body,{x:random(0,400),y:0});
            
    }
  }
  
    display(){
  
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      fill(0,0,255);
      translate(pos.x, pos.y);
      rotate(angle);
      ellipse(0,0,4);
      pop();
  
    }
  }