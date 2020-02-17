/* class to create an image
    imageFile is a string of the name of the file, can be local file or URL
    x, y are position of the image
    if the height and width are undefined, then they are gotten from the image's width and height
*/
class Icon extends GraphicalObject {
    constructor(imageFile = undefined, x = 0, y = 0, width=undefined, height=undefined) {
        super(x,y);
        this.imageFile = "tests/"+imageFile;
        this.image = new Image();
        this.image.src = this.imageFile;
        width ? this.width = width : this.width = this.image.width;
        height ? this.height = height : this.height = this.image.height;
        this.x = x;
        this.y = y;
    }

    draw(ctx) {
        let baseX = this.x;
        let baseY = this.y;
        if (this.group !== null) {
            baseX = this.group.childToParent(this.x, this.y)[0];
            baseY = this.group.childToParent(this.x, this.y)[1];
        }


        if (this.image.complete) {
            async () => {
                console.log("resolving icon 1")
                ctx.beginPath();
                ctx.drawImage(this.image, baseX, baseY, this.width, this.height);
                await ctx.stroke();
            }

        } else {
            this.image.onload = async () => {
                console.log("resolving icon 2");
                ctx.beginPath();
                ctx.drawImage(this.image, baseX, baseY, this.width, this.height);
                await ctx.stroke();
                console.log("stroked");
            }
        }
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