/* class to create a rectangle outline
    x, y is the top, left of the rectangle
    x, y, width, height, lineThickness are all numbers
    color = color of the outline
    the rectangle should grow inwards if lineThickness changes, so the width and height don't change
    */
class OutlineRect extends GraphicalObject {
    constructor(x = 0, y = 0, width = 20, height = 20, color = "black", lineThickness = 1) {
        super(x,y);
        this.width = width;
        this.height = height;
        this.color = color;
        this.lineThickness = lineThickness;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.lineWidth = this.lineThickness;
        ctx.strokeStyle = this.color;

        if (this.group !== null) {
            // group contains start of shape 
            console.log(this.x, this.y, this.x+this.width, this.y+this.height)
            if (this.group.contains(this.x, this.y)) {
                console.log("contains the start!")
                //group contains end of shape
                if (this.group.contains(this.x+this.width, this.y+this.height)) {
                    console.log("contains the whole group!")
                    ctx.rect(this.x, this.y, this.width, this.height);
                }
                // if only contains the beginning, draw shape until the end of group
                else {
                    console.log("gonna draw the rest of the shape!")
                    ctx.rect(this.x, this.y, Math.min(this.group.width + this.group.x, this.width), Math.min(this.group.y+this.group.height, this.y + this.height));
                }
            }
            // if only contains the end, draw shape from beginning of the group 
            else if (this.group.contains(this.x+this.width, this.y+this.height)) {
                ctx.rect(this.group.x, this.group.y, this.width, this.height);
            }
            else {
                ctx.rect(0, 0, 0, 0);
            }
        }
        else {
            ctx.rect(this.x, this.y, this.width, this.height);
        }


        // ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }

        /* returns the bounding box as a dictionary with these fields:
     {x: , y: , width:, height: } 
     */
    getBoundingBox() {
        let borderOffset = .5*this.lineThickness
        return {x: this.x - borderOffset, y: this.y - borderOffset, width: this.width + this.lineThickness, height: this.height + this.lineThickness}
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
        return (x > this.x && x < this.x+this.width && y > this.y && y < this.y+height);
    } 
}