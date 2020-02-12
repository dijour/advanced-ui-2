/* main group superclass */
class Group extends GraphicalObject {
    constructor(x = 0, y = 0, width = 100, height = 100) {
        super(x, y);
        this.width = width;
        this.height = height;
        this.children = [];
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
                this.child.setGroup(null)
                this.children.splice(i, 1);
            }
        }
    }


    /* brings the child to the front. Returns false if child was not in the group, otherwise returns true
    */
    bringChildToFront(child) {
        for (let i = 0; i < this.children.length(); i++) {
            if (this.children[i] == child) {
                this.children.splice(i, 1);
                this.addChild(child);
                return true
            }
        }
        return false
    }


    /* calculates the width and height to just fit all the children, and sets the group to that size.
        returns new [width, height] as an array.
    */
    resizeToChildren() {
        totalArrays = this.recurseThroughChildren(this);
        console.log(totalArrays);
    }

    recurseThroughChildren(node) {
        if (!node.children) {
            return node.getBoundingBox();
        }
        else {
            sizeArray = [];
            for (child in node.children) {
                sizeArray << resizeToChildren(node.children[child]);
            }
            return sizeArray;
        }
    }

    /* converts the parameter x,y coordinates and returns a point [x, y] array
    */
    parentToChild(x, y) { }

    
    /* converts the parameter x,y coordinates and returns a point [x, y] array
    */
    childToParent(x, y) { }

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
        return (x > this.x && x < this.x+this.width && y > this.y && y < this.y+this.height);
    } 
}
