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
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineThickness;
        ctx.stroke();
    }

    /* returns the bounding box as a dictionary with these fields:
     {x: , y: , width:, height: } 
     */
    getBoundingBox() {
        return {x: this.x1, y: this.y1, width: this.x2-this.x1, height: this.y2-this.y1};
    } 

   /* moves the object to the specified coordinates */
    moveTo(x, y) {
        this.x = x;
        this.y = y;
    } 

    /* sets the group of the object */
    setGroup(group) { 
        this.group = group; // a real implementation may need to do more than just this
    }

    /* returns a boolean of whether this graphicalObject contains that point or not */
    contains(x, y) {
        return false;
    } 
}