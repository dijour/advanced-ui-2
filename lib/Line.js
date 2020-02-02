/* class to create a straight line object
    color = color of the line, 
    x1, y1, x2, y2, lineThickness are all numbers
    do not access x,y,width, height of a line since need to be calculated, use getBoundingBox instead.
*/
class Line extends GraphicalObject {
    constructor(x1 = 0, y1 = 0, x2 = 20, y2 = 20, color = "black", lineThickness = 1) {
        super(0,0); //have to calculate the correct x,y for the call to super
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.color = color;
        this.lineThickness = lineThickness;
    }

    draw(ctx) {
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.stroke();
    }
}