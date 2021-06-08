class Stone {
    constructor(x, y) {
      var options = {
        'density':12,
        'friction': 0.9,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(500,500, 50, 50, options);
      this.width = 80;
      this.height = 80;
      World.add(world, this.body);
    };
    display(){
      var stonepos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(stonepos.x, stonepos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('white')
      fill('black')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };