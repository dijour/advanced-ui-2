class TestScaledGroup extends TestHarness {
  
	async runTest() {
	  this.message("topGroup");
	  let topGroup = new ScaledGroup(0, 0, 200,300, 2, 2);
	//   this.topGraphics.addChild(topGroup);
      const ctx = this.topGraphics.ctx;
      


	  let topGroup2 = new SimpleGroup(0, 0,700,700);
	  this.topGraphics.addChild(topGroup2);
  
          this.message("OutlineRect");
          let G21 = new OutlineRect(200, 10, 50, 50, "black", 3);
          let G22 = new OutlineRect(250, 10, 80, 50, "red", 1)

          topGroup2.addChild(G21)
          topGroup2.addChild(G22)


          this.topGraphics.redraw();

          await this.waitForUser();

            topGroup2.addChild(topGroup);

  
          this.message("OutlineRect");
          let OR1 = new OutlineRect(10, 10, 50, 50, "black", 3);
          console.log(OR1.getBoundingBox())
          let OR2 = new OutlineRect(70, 10, 80, 50, "red", 1)
		      topGroup.addChild(OR1);
          topGroup.addChild(OR2);
          // let bounds = OR2.getBoundingBox();
          console.log(OR2.x)
          // console.log(bounds);
          // let w1 = new FilledRect(bounds.x, bounds.y, bounds.width, bounds.height, "blue")
          
          this.topGraphics.redraw();
          await this.waitForUser();

          // topGroup.addChild(w1);
          this.topGraphics.redraw();

  
          this.message("FilledRect");
          let FR1 = new FilledRect(10, 70, 50, 50, "black");
          let FR2 = new FilledRect(70, 70, 80, 50, "red");
          topGroup.addChild(FR1);
          topGroup.addChild(FR2);
          // bounds = FR2.getBoundingBox();
          // let w2 = new FilledRect(bounds.x, bounds.y, bounds.width, bounds.height, "yellow")
          this.topGraphics.redraw();
          await this.waitForUser();
          // topGroup.addChild(w2);
          this.topGraphics.redraw();


  
          this.message("Line");
        
          let L1 = new Line(10, 130, 10, 180, "black", 1)
          let L2 = new Line(20, 130, 60, 130, "red", 3)
          let L3 = new Line(70, 130, 120, 180, "blue", 10)
          let L4 = new Line(70, 130, 120, 180, "blue", 10)

          topGroup.addChild(L1);
          topGroup.addChild(L2);
          topGroup.addChild(L3);
          
          // bounds = L3.getBoundingBox();
          // console.log(bounds)
          // let w3 = new FilledRect(bounds.x, bounds.y, bounds.width, bounds.height, "green")
          this.topGraphics.redraw();
          await this.waitForUser();
          // topGroup.addChild(w3);
          this.topGraphics.redraw();

          await this.waitForUser();
          topGroup.addChild(L4);
          this.topGraphics.redraw();
  
          // this.message("Icon");
          // topGroup.addChild(new Icon("jslogo.png", 10, 200));
          // topGroup.addChild(new Icon("dog.png", 80, 200));
  
      this.message("Text");
      let T1 = new Text("This is a test for dean, sir dean Gg", 10, 350, "12px Arial", "black", ctx)
      let T2 = new Text("going", 70, 350, "30px Times", "red", ctx)
      let T3 = new Text("gone", 140, 350, "40px Serif", "green", ctx)
		  topGroup.addChild(T1);
		  topGroup.addChild(T2);
      topGroup.addChild(T3);
      
      // bounds = T3.getBoundingBox();
      // console.log(bounds)
      // let w4 = new FilledRect(bounds.x, bounds.y, bounds.width, bounds.height, "green")
      this.topGraphics.redraw();
      await this.waitForUser();
      // topGroup.addChild(w4);
      this.topGraphics.redraw();

      await this.waitForUser();

      // topGroup.removeChild(w4);

      T1.moveTo(20, 360);

      topGroup.addChild(new Line(10, 350, 250, 350, "black", 1));

      topGroup.addChild(new FilledRect(250, 350, 10, 10, "black", 1));

      topGroup.addChild(new FilledRect(-10, -10, 30, 30, "black", 1));
    
      this.topGraphics.redraw();

      await this.waitForUser();

      topGroup.resizeToChildren();

      let newBounds = topGroup.getBoundingBox();

      console.log(newBounds)

      // console.log(newBounds);
      let OR3 = new OutlineRect(newBounds.x, newBounds.y, newBounds.width, newBounds.height, "black", 1);

      topGroup.addChild(OR3);

      topGroup.scaleX = 3;
      topGroup.scaleY = 1;

        this.topGraphics.redraw();
        
  
		  this.message("all done");
	}
  }
  