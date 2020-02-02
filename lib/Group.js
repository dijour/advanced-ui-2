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
    addChild(child) { return false; }


    /*
      removes the child from the group.
      child must be a GraphicalObject.
      Returns false and does nothing if child was not in the group.
      returns true if successfully removed.
    */
    removeChild(child) { return false; }


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
}
