// import { threadId } from "worker_threads";

/*  class to create text or strings on the screen
    text is a string to be displayed
    x, y are the coordinates of the baseline of the string
    font is string that defines an appropriate font
    color = color of the text
    do not access width, height of a Text since need to be calculated, use getBoundingBox instead.
*/
class Text extends GraphicalObject {
    constructor(text = "test", x = 0, y = 0, font = "", color = "black", ctx) {
        super(x,y);
        this.text = text; 
        this.font = font; 
        this.color = color; 
        this.ctx = ctx;
    }

    draw(ctx) {
        let baseX = this.x;
        let baseY = this.y;
        if (this.group !== null) {
            baseX = this.group.childToParent(this.x, this.y)[0];
            baseY = this.group.childToParent(this.x, this.y)[1];
        }

        ctx.font = this.font;
        ctx.fillStyle = this.color;
        return new Promise((resolve, reject) => {
            resolve(ctx.fillText(this.text, baseX, baseY));
        })
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
        
        this.ctx.font = this.font;
        let measurements = (this.ctx.measureText(this.text));
        return {
            x: baseX - measurements.actualBoundingBoxLeft, 
            y: baseY - measurements.actualBoundingBoxAscent, 
            width: Math.max((measurements.actualBoundingBoxLeft + measurements.actualBoundingBoxRight), (measurements.actualBoundingBoxRight - measurements.actualBoundingBoxLeft)),  
            height: Math.max((measurements.actualBoundingBoxDescent + measurements.actualBoundingBoxAscent), (measurements.actualBoundingBoxAscent - measurements.actualBoundingBoxDescent))
        };
    } 

    getXY() {
        this.ctx.font = this.font;
        let measurements = (this.ctx.measureText(this.text));
        return {
            x: measurements.actualBoundingBoxLeft, 
            y: measurements.actualBoundingBoxAscent 
        } 
    }

   /* moves the object to the specified coordinates */
    moveTo(x, y) {
        let coordinates = this.getXY();
        this.x = x + coordinates.x;
        this.y = y + coordinates.y;
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