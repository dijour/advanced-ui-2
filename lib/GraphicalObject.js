/* 
Each of these classes needs to be put into its own class in your code. 
There are all collected together here just for brevity. You should modify
the body of all the methods to do the right things.
*/

class GraphicalObject {

    /* creates an empty object at a location */
    constructor(x = 0, y = 0) { 
        this.x = x;
        this.y = y;
        this.group = null;
    } 
    
    /* ctx is a canvas returned from getContext */
    draw(ctx) {}

    /* returns the bounding box as a dictionary with these fields:
     {x: , y: , width:, height: } 
     */
    getBoundingBox() {} 

   /* moves the object to the specified coordinates */
    moveTo(x, y) {} 

    /* sets the group of the object */
    setGroup(group) { 
        this.group = group; // a real implementation may need to do more than just this
    }

    /* returns a boolean of whether this graphicalObject contains that point or not */
    contains(x, y) {
        return false;
    } 
}