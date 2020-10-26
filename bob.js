class Bob {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          restitution : 0.6,
          friction :0.5,
          density :1.2
      }
      this.x=x;
      this.y=y;
      this.r=r;
    this.bobObject1Body=Bodies.circle(this.x, this.y, this.r/2, options)

    this.x=x;
      this.y=y;
      this.r=r;
    this.bobObject2Body=Bodies.circle(this.x, this.y, this.r/3, options)

    this.x=x;
      this.y=y;
      this.r=r;
    this.bobObject3Body=Bodies.circle(this.x, this.y, this.r/4, options)


    this.x=x;
      this.y=y;
      this.r=r;
    this.bobObject4Body=Bodies.circle(this.x, this.y, this.r/5, options)

    this.x=x;
      this.y=y;
      this.r=r;
    this.bobObject5Body=Bodies.circle(this.x, this.y, this.r/6, options)
    
      World.add(world, this.bobObject1Body);
      World.add(world, this.bobObject2Body);
      World.add(world, this.bobObject3Body);
      World.add(world, this.bobObject4Body);
      World.add(world, this.bobObject5Body);
    }
    display(){
        var paperpos =this.bobObject1Body.position;
        var paperpos =this.bobObject2Body.position;
        var paperpos =this.bobObject3Body.position;
        var paperpos =this.bobObject4Body.position;
        var paperpos =this.bobObject5Body.position;


      push()
        translate(paperpos.x,paperpos.y);
        strokeWeight(3);
      fill("purple");
      ellipse(50,0,this.r,this.r);
    pop()

    push()
        translate(paperpos.x,paperpos.y);
        strokeWeight(3);
      fill("purple");
      ellipse(100,0,this.r,this.r);
    pop()

    push()
        translate(paperpos.x,paperpos.y);
        strokeWeight(3);
      fill("purple");
      ellipse(150,0,this.r,this.r);
    pop()

    push()
        translate(paperpos.x,paperpos.y);
        strokeWeight(3);
      fill("purple");
      ellipse(200,0,this.r,this.r);
    pop()

    push()
        translate(paperpos.x,paperpos.y);
        strokeWeight(3);
      fill("purple");
      ellipse(250,0,this.r,this.r);
    pop()

    }
  }