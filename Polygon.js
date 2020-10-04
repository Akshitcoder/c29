class Polygon{
	constructor()
	{
		var options={
        restitution:0.04, 
        friction:1.0,
        density:1.0,
		 isStatic:true
		
		}
		this.image = loadImage("polygon.png")
			this.body=Bodies.circle(200,300,9,options);
		World.add(world, this.body);
	}
	display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,70,70);
        pop();
      }


}
