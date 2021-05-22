class Ball {
    constructor(x,y,radius) {
      var options = {
          restitution:0.3,
          isStatic:false,
          friction:0.3,
          density:0.6


      }
      this.body = Bodies.circle(x,y,radius,options);
      this.r = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      ellipse(pos.x, pos.y, this.r,this.r);
    }
  };