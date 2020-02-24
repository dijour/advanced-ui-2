class TestLine extends TestHarness {

    async runTest() {
  
      this.message("topGroup for TestOutlineRect");
      let topGroup = new SimpleGroup (0,0,200, 200);
      
      this.topGraphics.addChild(topGroup); 
  
      this.message("creating red line");
  
      let lineThickness = 2;
  
          let r = new Line(50, 50, 25, 45, "red", lineThickness);
          // console.log(r.getBoundingBox())
          let r1 = new OutlineRect(50, 50, 10, 10, "red", lineThickness);


          topGroup.addChild(r);
        //   await this.waitForUser();
          
        //   this.message("moving line");
          let x,y

          this.topGraphics.redraw();
          await this.waitForUser();
          this.topGraphics.redraw();
          r.moveTo(0, 30);
          await this.waitForUser();
          this.topGraphics.redraw();
          r.moveTo(50, 30);
          await this.waitForUser();
          this.topGraphics.redraw();
          r.moveTo(100, 100);
          await this.waitForUser();
          this.topGraphics.redraw();
        //   this.message("moving line with moveTo ()");
        //   for (x = 10; x < 150; x += 30) {
        //       for (y = 10; y < 150; y += 30) {
        //           r.moveTo(x, y);
        //           this.topGraphics.redraw();
        //           await this.waitForUser();
        //       }
        //   }
          this.message("final bounding box is " + r.getBoundingBox());
          this.message("final x/y position is " + r.x + "," + r.y);
          await this.waitForUser();
  
          this.message("doubling line thickness to " + (lineThickness * 2));
          r.lineThickness = lineThickness * 2;
          this.topGraphics.redraw();
          await this.waitForUser();
  
          this.message("moving line with moveTo ()");
          for (x = 10; x < 150; x += 30) {
              for (y = 10; y < 150; y += 30) {
                  r.moveTo(x, y);
                  this.topGraphics.redraw();
                  await this.waitForUser();
              }
          }
          this.message("final bounding box is " + r.getBoundingBox());
          this.message("final x/y position is " + r.x + "," + r.y);
          this.message("all done");
    }
  }
  