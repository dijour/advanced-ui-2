
/* LayoutGroup sets the x,y of each child so they are layed out in a row or column,
depending on the layout parameter.
There is offset distance between each child object, which can be negative.
*/
const HORIZONTAL = 0;
const VERTICAL = 1;
class LayoutGroup extends Group {
    constructor(x = 0, y = 0, width = 100, height = 100, layout = HORIZONTAL, offset = 50) {
        super(x, y, width, height);
        this.offset = offset;
        this.layout = layout;
        this.sizeUpdated = true;
        this.children = [];
    }

    draw(ctx) {
        console.log(this.sizeUpdated)

        ctx.save();
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.clip();

        ctx.beginPath();
        ctx.lineWidth = .5;
        ctx.strokeStyle = "black";
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        ctx.closePath();

        // should start at 0,0 relative to group
        let startX = this.x;
        let startY = this.y;

        if (!this.layout) {
            for (let child in this.children) {
                let w = this.children[child].getBoundingBox().width;
                let altOffset;
                child == 0 ? altOffset = 0 : altOffset = this.offset;
                this.children[child].moveTo(startX + altOffset, startY)
                ctx.beginPath();
                this.children[child].draw(ctx);
                startX = startX + w + altOffset;
            }
        }
        if (this.layout) {
            for (let child in this.children) {
                console.log(this.children[child])
                console.log(this.children[child].getBoundingBox())
                let h = this.children[child].getBoundingBox().height;
                let altOffset;
                child == 0 ? altOffset = 0 : altOffset = this.offset;
                this.children[child].moveTo(startX, startY + altOffset);
                ctx.beginPath();
                this.children[child].draw(ctx);
                startY = startY + h + altOffset;
            }
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
            if (!minX) {
                minX = this.x;
                maxX = totalBounds[bound].x + totalBounds[bound].width;
                minY = this.y;
                maxY = totalBounds[bound].y + totalBounds[bound].height
                continue;
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
        this.sizeUpdated = true;
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
    parentToChild(x, y) {
      let output = [];
      output.push(this.x - x);
      output.push(this.y - y);
      return output;
    }

    
    /* converts the parameter x,y coordinates and returns a point [x, y] array
    */
    childToParent(x, y) { 
        return [x, y]
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
        this.group = group; // a real implementation may need to do more than just this
    }

    /* returns a boolean of whether this graphicalObject contains that point or not */
    contains(x, y) {
        let coords = this.getBoundingBox();
        return (x > coords.x && x < coords.x+coords.width && y > coords.y && y < coords.y+coords.height);
    } 
}
