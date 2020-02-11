class TestAllObjects extends TestHarness {
  
  async runTest() {
    this.message("topGroup");
		let topGroup = new SimpleGroup (0,0,300,400);
    	this.topGraphics.addChild(topGroup); 

		this.message("OutlineRect");
		topGroup.addChild(new OutlineRect(10, 10, 500, 500, "black", 1));
		topGroup.addChild(new OutlineRect(70, 10, 80, 50, "red", 2));

		this.message("FilledRect");
		topGroup.addChild(new FilledRect(10, 70, 50, 50, "black"));
		topGroup.addChild(new FilledRect(70, 70, 80, 50, "red"));

		this.message("Line");
		topGroup.addChild(new Line(10, 10, 510, 510, "black", 1));
		topGroup.addChild(new Line(9, 9.5, 9.5, 9.5, "black", 1));
		topGroup.addChild(new Line(20, 130, 60, 130, "red", 3));
		topGroup.addChild(new Line(70, 130, 120, 180, "blue", 10));

		this.message("Icon");
		topGroup.addChild(new Icon("jslogo.png", 10, 200));
		topGroup.addChild(new Icon("dog.png", 80, 200));

		this.message("Text");
		topGroup.addChild(new Text("going", 10, 350, "", "black"));
		topGroup.addChild(new Text("going", 70, 350, "SansSerif", "red"));
		topGroup.addChild(new Text("gone", 140, 350, "Serif", "green"));
		topGroup.addChild(new Line(10, 350, 250, 350, "black", 1));
		
		topGroup.resizeToChildren();
    
    	this.topGraphics.redraw();

		this.message("all done");
  }
}
