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
        let baseX = this.x;
        let baseY = this.y;
        if (this.group !== null && this.group.layout === undefined) {
            baseX = this.group.childToParent(this.x, this.y)[0] + this.group.x;
            baseY = this.group.childToParent(this.x, this.y)[1] + this.group.y;
        }

        console.log(this.group.childToParent(this.x, this.y))

        ctx.beginPath();
        ctx.lineWidth = this.lineThickness;
        ctx.strokeStyle = this.color;
        ctx.rect(baseX, baseY, this.width, this.height);
        ctx.stroke();
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

        let borderOffset = .5*this.lineThickness
        return {x: baseX - borderOffset, y: baseY - borderOffset, width: this.width + this.lineThickness, height: this.height + this.lineThickness}
    } 

   /* moves the object to the specified coordinates */
    moveTo(x, y) {
        this.x = x + .5*this.lineThickness;
        this.y = y + .5*this.lineThickness;
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