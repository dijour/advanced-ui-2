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
        let baseX = this.x;
        let baseY = this.y;
        if (this.group !== null) {
            baseX = this.group.childToParent(this.x, this.y)[0];
            baseY = this.group.childToParent(this.x, this.y)[1];
        }

        console.log(baseX, baseY)

        ctx.fillStyle = this.color;
        (ctx.fillRect(baseX, baseY, this.width, this.height));
        
    }

    /* returns the bounding box as a dictionary with these fields:
     {x: , y: , width:, height: } 
     */
    getBoundingBox() {
        let baseX = this.x;
        let baseY = this.y;
        if (this.group !== null) {
            baseX = this.group.childToParent(this.x, this.y)[0];
            baseY = this.group.childToParent(this.x, this.y)[1];
        }

        return {x: baseX, y: baseY, width: this.width, height: this.height};
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
        let coords = this.getBoundingBox();
        return (x > coords.x && x < coords.x+coords.width && y > coords.y && y < coords.y+coords.height);
    } 
}