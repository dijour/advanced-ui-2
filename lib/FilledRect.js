/* class to create a filled rectangle
    x, y is the top, left of the rectangle
    x, y, width, height are all numbers
    color = color of the fill
*/
class FilledRect extends GraphicalObject {
    constructor(x = 0, y = 0, width = 20, height = 20, color = "black") {
        super(x,y);
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        if (this.group !== null) {
            // group contains start of shape 
            if (this.group.contains(this.x, this.y)) {
                //group contains end of shape
                if (this.group.contains(this.x+this.width, this.y+this.height)) {
                    ctx.fillRect(this.x, this.y, this.width, this.height);
                }
                // if only contains the beginning, draw shape until the end of group
                else {
                    ctx.fillRect(this.x, this.y, this.group.x+this.group.width, this.group.y+this.group.height);
                }
            }
            // if only contains the end, draw shape from beginning of the group 
            else if (this.group.contains(this.x+this.width, this.y+this.height)) {
                ctx.fillRect(this.group.x, this.group.y, this.width, this.height);
            }
        }
        else {
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }

    }

    /* returns the bounding box as a dictionary with these fields:
     {x: , y: , width:, height: } 
     */
    getBoundingBox() {
        return {x: this.x, y: this.y, width: this.width, height: this.height}
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