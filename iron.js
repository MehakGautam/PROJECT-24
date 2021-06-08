class Iron {
    constructor(x, y) {
      var options = {
        'density':30,
        'friction': 3,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(700,500, 50, 50, options);
      this.width = 80;
      this.height = 150;
      World.add(world, this.body);
    };
    display(){
      var ironpos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(ironpos.x, ironpos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('white')
      fill('red')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };