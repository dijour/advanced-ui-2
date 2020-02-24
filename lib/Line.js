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
        let baseX1 = this.x1;
        let baseY1 = this.y1;
        let baseX2 = this.x2
        let baseY2 = this.y2;
        if (this.group !== null && this.group.layout === undefined) {
            baseX1 = this.group.childToParent(this.x1, this.y1)[0] + this.group.x;
            baseY1 = this.group.childToParent(this.x1, this.y1)[1] + this.group.y;
            baseX2 = this.group.childToParent(this.x2, this.y2)[0] + this.group.x;
            baseY2 = this.group.childToParent(this.x2, this.y2)[1] + this.group.y;
        }

        ctx.beginPath();
        ctx.moveTo(baseX1, baseY1);
        ctx.lineTo(baseX2, baseY2);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineThickness;
        (ctx.stroke());
    }

    /* returns the bounding box as a dictionary with these fields:
     {x: , y: , width:, height: } 
     */
    getBoundingBox() {
        // if the line is at a non-90 degree angle
        if (this.x1 === this.x2 && this.y1 === this.y2) {
            return {x: x1, y: y1, width: 0, height: 0};
        }
        else if (this.x1 === this.x2 && this.y1 !== this.y2) {
            return {x: Math.min(this.x1, this.x2) - .5*this.lineThickness, y: Math.min(this.y1, this.y2), width: Math.abs(this.x2-this.x1)+this.lineThickness, height: Math.abs(this.y2-this.y1)};
        }
        else if (this.x1 !== this.x2 && this.y1 === this.y2) {
            return {x: Math.min(this.x1, this.x2), y: Math.min(this.y1, this.y2)- .5*this.lineThickness, width: Math.abs(this.x2-this.x1), height: Math.abs(this.y2-this.y1) +this.lineThickness};
        }
        if (this.x1 !== this.x2 && this.y1 !== this.y2) {
            return {x: Math.min(this.x1, this.x2) - .5*this.lineThickness, y: Math.min(this.y1, this.y2)-.5*this.lineThickness, width: Math.abs(this.x2-this.x1)+this.lineThickness, height: Math.abs(this.y2-this.y1)+this.lineThickness};
        }
        // if the line is exactly horizontal or vertical
        // return {x: Math.min(this.x1, this.x2), y: Math.min(this.y1, this.y2), width: Math.abs(this.x2-this.x1), height: Math.abs(this.y2-this.y1)};
    } 

   /* moves the object to the specified coordinates */
    moveTo(x, y) {
        let x1 = this.x1;
        let x2 = this.x2;
        let y1 = this.y1;
        let y2 = this.y2;

        this.x1 = x;
        this.y1 = y;
        this.x2 = Math.abs(x2-x1) + x; 
        this.y2 = Math.abs(y2-y1) + y;
    } 

    /* sets the group of the object */
    setGroup(group) { 
        this.group = group; // a real implementation may need to do more than just this
    }

    /* returns a boolean of whether this graphicalObject contains that point or not */
    contains(x, y) {
        let coordinates = this.getBoundingBox();
        return (x > coordinates.x && x < coordinates.x+coordinates.width && y > coordinates.y && y < coordinates.y+coordinates.height);
    } 
}