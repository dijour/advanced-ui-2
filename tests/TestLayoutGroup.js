class TestLayoutGroup extends TestHarness {

  async runTest() {

	this.message("topGroup for TestLayoutGroup");
	let topGroup = new SimpleGroup (0,0,500, 200);
    this.topGraphics.addChild(topGroup); 

	this.message("creating black frame");
	topGroup.addChild(new OutlineRect(9, 9, 481, 181, "black", 1));

	this.message("creating LayoutGroup inside black frame");
	let group = new LayoutGroup(10, 10, 480, 180, HORIZONTAL, 0);
	topGroup.addChild(group);

	this.message("creating random OutlineRects");
	let nObjects = 4;
	let objects = [];
	let colors = ["black", "red", "blue"];
	let i;
	for (i = 0; i < nObjects; ++i) {
		objects[i] = new OutlineRect(this.RandomInt(200), this.RandomInt(200), 
			30 + this.RandomInt(20), 30 + this.RandomInt(20), 
			colors[this.RandomInt(3)], 1 + this.RandomInt(5));
		group.addChild(objects[i]);
	}

	this.topGraphics.redraw();
    await this.waitForUser();

	this.message("shuffling rectangles 10 times");
	for (i = 0; i < 10; ++i) {
		let gobj = objects[this.RandomInt(nObjects)];
		group.bringChildToFront(gobj);
		this.topGraphics.redraw();
		this.sleep(1000);
	}

    await this.waitForUser();

	this.message("doubling rectangle widths");
	let r;
	for (i = 0; i < objects.length; ++i) {
		r = objects[i];
		r.width = r.width * 2;
		this.topGraphics.redraw();
		this.sleep(1000);
	}
	this.message("all done");
  }
}
