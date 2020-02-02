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
        ctx.lineWidth = lineThickness;
        ctx.strokeStyle = color;
        ctx.rect(this.x, this.y, this.x+this.width, this.y+this.height);
        ctx.stroke();
    }
}