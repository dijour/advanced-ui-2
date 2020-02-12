class TestIcon extends TestHarness {

    async runTest() {
  
      this.message("topGroup for TestOutlineRect");
      let topGroup = new SimpleGroup (0,0,200, 200);
      
      this.topGraphics.addChild(topGroup); 
  
      this.message("creating red OutlineRect");
  
      topGroup.addChild(new Icon("jslogo.png", 10, 10))

      this.topGraphics.redraw();

    }
  }