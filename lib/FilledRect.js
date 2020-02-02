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
        ctx.rect(this.x, this.y, this.x+this.width, this.y+this.height);
        ctx.stroke();
    }
}