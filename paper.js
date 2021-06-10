class paper{
    constructor(x,y){
        var options ={
            isStatic:false,
            friction:0,
            restitutuion:0.3,
            density:1.2
        }
        this.body = Bodies.circle(x,y,25,options);

        this.radius = 25;
        this.image = loadImage("paper.png");
        World.add(world,this.body);
        
       
        
    }
    display()
	{
			
				

			push()
            var paperpos=this.body.position;		

            push()
            translate(paperpos.x, paperpos.y);
            imageMode(CENTER)
            
            image(this.image, 0,0,this.r, this.r)
            fill("white");
			pop()
			
    }
    
}

