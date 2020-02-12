/* implements the standard Group interface, as defined above.
*/
class SimpleGroup extends Group {
    constructor(x = 0, y = 0, width = 100, height = 100) {
      super(x, y, width, height);
    }

    /* ctx is a canvas returned from getContext */
    draw(ctx) {
      for (let child in this.children) {
          this.children[child].draw(ctx);
      }
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
      for (let i = 0; i < this.children.length; i++) {
        if (this.children[i] == child) {
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
      let totalBounds = this.recurseThroughChildren(this, []);
      let minX;
      let minY;
      let maxX;
      let maxY;
      for (let bound in totalBounds) {
        if (!minX) {
          minX = totalBounds[bound].x;
          maxX = totalBounds[bound].x + this.width;
          minY = totalBounds[bound].y;
          maxY = totalBounds[bound].y + this.width;
          continue;
        }
        if (totalBounds[bound].x < minX) {
          minX = totalBounds[bound].x
        }
        if (totalBounds[bound].y < minY) {
          minY = totalBounds[bound].y
        }
        if (totalBounds[bound].x + totalBounds[bound].width > maxX) {
          maxX = totalBounds[bound].x + totalBounds[bound].width
        }
        if (totalBounds[bound].y + totalBounds[bound].height > maxY) {
          maxY = totalBounds[bound].y + totalBounds[bound].height
        }
      }
      this.x = minX;
      this.y = minY;
      this.width = maxX - minX;
      this.height = maxY - minY;
    }

    recurseThroughChildren(node, sizeArray) { 
      if (!node.children) {
        return node.getBoundingBox();
      }
      else {
        for (let child in node.children) {
          sizeArray.push(this.recurseThroughChildren(node.children[child], sizeArray));
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
}
