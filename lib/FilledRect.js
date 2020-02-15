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
        ctx.fillStyle = this.color;
        return new Promise((resolve, reject) => {
            resolve(ctx.fillRect(this.x, this.y, this.width, this.height));
        })
        
    }

    /* returns the bounding box as a dictionary with these fields:
     {x: , y: , width:, height: } 
     */
    getBoundingBox() {
        return {x: this.x, y: this.y, width: this.width, height: this.height}
    } 

   /* moves the object to the specified coordinates */
    moveTo(x, y) {
        let x1 = this.x;
        let x2 = this.x + this.width;
        let y1 = this.y;
        let y2 = this.y + this.height;
        this.x = x;
        this.y = y;
        this.width = (x2-x1); 
        this.height = (y2-y1);
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