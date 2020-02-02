/* class to create an image
    imageFile is a string of the name of the file, can be local file or URL
    x, y are position of the image
    if the height and width are undefined, then they are gotten from the image's width and height
*/
class Icon extends GraphicalObject {
    constructor(imageFile = undefined, x = 0, y = 0, width=undefined, height=undefined) {
        super(x,y);
        this.x = x;
        this.y = y;
        this.width=width;
        this.height=height;
    }
}