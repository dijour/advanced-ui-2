/* implements the standard Group interface, as defined above.
*/
class SimpleGroup extends Group {
    constructor(x = 0, y = 0, width = 100, height = 100) {
      super(x, y, width, height);
      this.children = [];
    }

    /* ctx is a canvas returned from getContext */
    // draw(ctx) {
    //   ctx.beginPath();
    //   ctx.rect(this.x, this.y, this.width, this.height);
    //   ctx.clip();

    //   // to visualize the group:
    //   ctx.lineWidth = .5;
    //   ctx.strokeStyle = "black";
    //   ctx.rect(this.x, this.y, this.width, this.height);
    //   ctx.stroke();

    //   for (let child in this.children) {
    //       this.children[child].draw(ctx);
    //   }
    // }


    async draw(ctx) {
      let realX = this.x;
      let realY = this.y;

      // if (this.group){
        realX = this.childToParent(this.x,this.y)[0];
        realY = this.childToParent(this.x,this.y)[1];
      // }
      // then figure out where the group stuff should be placed on the canvas



      ctx.beginPath();
      ctx.save();
      ctx.rect(realX, realY, this.width, this.height);
      // console.log("This group is: ", this)
      // console.log(realX, realY)
      ctx.clip();

            // to visualize the group:
      ctx.lineWidth = .5;
      ctx.strokeStyle = "black";
      ctx.rect(realX, realY, this.width, this.height);
      ctx.stroke();

      // 1. define clip region using the ctx.clip() API
      // 2. draw children
      for (let i = 0; i < this.children.length; i++) {
        await this.children[i].draw(ctx);
      }
      ctx.restore();
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

    /* sets the group of the object */
    setGroup(group) { 
      this.group = group; // a real implementation may need to do more than just this
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
      for (let i = 0; i < this.children.length; i++) {
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
        // let newBounds = this.parentToChild(totalBounds[bound].x, totalBounds[bound].y)
        // if (!minX) {
        //   minX = newBounds[0] >= 0 ? newBounds[0] : 0;
        //   maxX = newBounds[0] >= 0 ? newBounds[0] : 0;
        //   minY = newBounds[1] >= 0 ? newBounds[1] : 0;
        //   maxY = newBounds[1] >= 0 ? newBounds[1] : 0;
        //   continue;
        // }
        // if (newBounds[0] < minX && newBounds[0] >= 0) {
        //   minX = newBounds[0]
        // }
        // if (newBounds[1] < minY && newBounds[1] >= 0) {
        //   minY = newBounds[1]
        // }
        // if (newBounds[0] + totalBounds[bound].width > maxX) {
        //   maxX = newBounds[0] + totalBounds[bound].width
        // }
        // if (newBounds[1] + totalBounds[bound].height > maxY) {
        //   maxY = newBounds[1] + totalBounds[bound].height
        // }


        if (!minX) {
          minX = totalBounds[bound].x >= 0 ? totalBounds[bound].x : 0;
          maxX = totalBounds[bound].x >= 0 ? totalBounds[bound].x : 0;
          minY = totalBounds[bound].y >= 0 ? totalBounds[bound].y : 0;
          maxY = totalBounds[bound].y >= 0 ? totalBounds[bound].y : 0;
          continue;
        }
        if (totalBounds[bound].x < minX && totalBounds[bound].x >= 0) {
          minX = totalBounds[bound].x
        }
        if (totalBounds[bound].y < minY && totalBounds[bound].y >= 0) {
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

      // let newBounds = this.parentToChild(minX, minY)
      // this.x = newBounds[0];
      // this.y = newBounds[1]
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

    /* returns the bounding box as a dictionary with these fields:
     {x: , y: , width:, height: } 
     */
    getBoundingBox() {
      return {x: this.x, y: this.y, width: this.width, height: this.height};
    } 

    /* converts the parameter x,y coordinates and returns a point [x, y] array
    */
    parentToChild(x, y) {
      let output = [];
      output.push(this.x - x);
      output.push(this.y - y);
      return output;
    }

    /* converts the parameter x,y coordinates and returns a point [x, y] array
    */
    childToParent(x, y) {
      // return output;
      let newX = x;
      let newY = y;

      // console.log(this)
      if (!this.group) {
        return [newX, newY];
      }
      let g = this;
      while (g.group) {
        console.log("entering group: ", g)
        newX += g.group.x;
        newY += g.group.y;
        if (g.group) {
          g = g.group
        }
      }
      console.log(this);
      console.log([newX, newY])
      return [newX, newY];
    }

    /* moves the object to the specified coordinates */
    moveTo(x, y) {
      this.x = x;
      this.y = y;
    } 

    /* returns a boolean of whether this graphicalObject contains that point or not */
    contains() {
      let coords = this.getBoundingBox();
      return (x > coords.x && x < coords.x+coords.width && y > coords.y && y < coords.y+coords.height);
    }
}
