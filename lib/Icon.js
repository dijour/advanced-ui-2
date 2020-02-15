/* class to create an image
    imageFile is a string of the name of the file, can be local file or URL
    x, y are position of the image
    if the height and width are undefined, then they are gotten from the image's width and height
*/
class Icon extends GraphicalObject {
    constructor(imageFile = undefined, x = 0, y = 0, width=undefined, height=undefined) {
        super(x,y);
        this.imageFile = "tests/"+imageFile;
        const image = new Image();
        image.src = "tests/"+imageFile;
        width ? this.width = width : this.width = image.width;
        height ? this.width = height : this.height = image.height;
        this.imageFile = image;
        this.x = x;
        this.y = y;
    }

    draw(ctx) {
        if (this.imageFile.complete) {
            async () => {
                console.log("resolving icon 1")
                ctx.beginPath();
                ctx.drawImage(this.imageFile, this.x, this.y, this.width, this.height);
                await ctx.stroke();
            }

        } else {
            this.imageFile.onload = async () => {
                console.log("resolving icon 2");
                ctx.beginPath();
                ctx.drawImage(this.imageFile, this.x, this.y, this.width, this.height);
                await ctx.stroke();
                console.log("stroked");
            }
        }
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
        console.log("set")
        this.group = group; // a real implementation may need to do more than just this
    }

    /* returns a boolean of whether this graphicalObject contains that point or not */
    contains(x, y) {
        return false;
    } 
}