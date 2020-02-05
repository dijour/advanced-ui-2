class TestRect extends TestHarness {

    async runTest() {
  
        this.message("topGroup for TestOutlineRect");
        let topGroup = new SimpleGroup (0,0,200, 200);
        
        this.topGraphics.addChild(topGroup); 
    
        this.message("creating red OutlineRect");
    
        let outlined = new OutlineRect(10, 10, 50, 50, "red", 1);
        
        topGroup.addChild(outlined);

        console.log(topGraphics)

        console.log(topGroup.children)

        await this.waitForUser();

        outlined.lineThickness = 20;

        
        this.topGraphics.redraw();
        

        console.log(outlined.group)

        // let filled = new FilledRect(40, 40, 50, 50, "red");
        //   this.topGraphics.addChild(filled);

        // let line = new Line(40, 40, 400, 400, "red", 1);
        // this.topGraphics.addChild(line);

        // let text = new Text("brad meyers, special agent", 30, 400, "30px comic sans", "red");
        // this.topGraphics.addChild(text);

    //       await this.waitForUser();
          
    //       this.message("moving rectangle with setX(), setY()");
    //       let x,y
    //       for (x = 10; x < 150; x += 30) {
    //           r.x = x;
    //           for (y = 10; y < 150; y += 30) {
    //               r.y = y;
    //               this.topGraphics.redraw();
    //               await this.waitForUser();
    //           }
    //       }
    //       this.message("final bounding box is " + r.getBoundingBox());
    //       this.message("final x/y position is " + r.x + "," + r.y);
    //       await this.waitForUser();
  
    //       this.message("changing to blue");
    //       r.color = "blue";
    //       this.topGraphics.redraw();
    //       await this.waitForUser();
  
    //       this.message("moving rectangle with moveTo ()");
    //       for (x = 10; x < 150; x += 30) {
    //           for (y = 10; y < 150; y += 30) {
    //               r.moveTo(x, y);
    //               this.topGraphics.redraw();
    //               await this.waitForUser();
    //           }
    //       }
    //       this.message("final bounding box is " + r.getBoundingBox());
    //       this.message("final x/y position is " + r.x + "," + r.y);
    //       await this.waitForUser();
  
    //       this.message("doubling line thickness to " + (lineThickness * 2));
    //       r.lineThickness = lineThickness * 2;
    //       this.topGraphics.redraw();
    //       await this.waitForUser();
  
    //       this.message("moving rectangle with moveTo ()");
    //       for (x = 10; x < 150; x += 30) {
    //           for (y = 10; y < 150; y += 30) {
    //               r.moveTo(x, y);
    //               this.topGraphics.redraw();
    //               await this.waitForUser();
    //           }
    //       }
    //       this.message("final bounding box is " + r.getBoundingBox());
    //       this.message("final x/y position is " + r.x + "," + r.y);
    //       this.message("all done");
    }
  }
  