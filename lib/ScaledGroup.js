/* ScaledGroup does not change the parameters of its children, but they are all displayed
smaller or bigger depending on the scaleX and scaleY parameters.
If >1 then bigger, if <1.0 then smaller.
*/
class ScaledGroup extends Group {
    constructor(x = 0, y = 0, width = 100, height = 100, scaleX = 2.0, scaleY = 2.0) {
        super(x, y, width, height);
    }

    /*
      adds the child to the group.
      child must be a GraphicalObject.
      Returns false and does nothing if child is in a different group, returns true if successful
    */
    addChild(child) {
        if (child.group === null) {
            child.setGroup(this);
            this.children.push(child);
            return true;
        }
        return false; 
    }

    /*
    removes the child from the group.
    child must be a GraphicalObject.
    Returns false and does nothing if child was not in the group.
    returns true if successfully removed.
    */
    removeChild(child) { 
        for (let i = 0; i < this.children.length(); i++) {
            if (this.children[i] == child) {
                child.setGroup(null);
                this.children.splice(i, 1);
            }
        }
    }


    /* brings the child to the front. Returns false if child was not in the group, otherwise returns true
    */
    bringChildToFront(child) { return false; }


    /* calculates the width and height to just fit all the children, and sets the group to that size.
        returns new [width, height] as an array.
    */
    resizeToChildren() { }


    /* converts the parameter x,y coordinates and returns a point [x, y] array
    */
    parentToChild(x, y) { }


    /* converts the parameter x,y coordinates and returns a point [x, y] array
    */
    childToParent(x, y) { }

    /* returns the bounding box as a dictionary with these fields:
     {x: , y: , width:, height: } 
     */
    getBoundingBox() {} 

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
