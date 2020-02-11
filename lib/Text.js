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
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        ctx.fillText(this.text, this.x, this.y);
    }

        /* returns the bounding box as a dictionary with these fields:
     {x: , y: , width:, height: } 
     */
    getBoundingBox() {
        return {x: this.x, y: this.y, width: this.width, height: this.height};
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