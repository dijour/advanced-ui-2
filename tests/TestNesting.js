class TestNesting extends TestHarness {

    async runTest() {
        /* Create top group to place objects */
        this.message("topGroup");
        let topGroup = new SimpleGroup (0,0,400,400);
        this.topGraphics.addChild(topGroup);
        const ctx = this.topGraphics.ctx;
        // this.topGraphics.redraw();
        // await this.waitForUser();
        this.message("Adding second group...")
        let secondGroup = new SimpleGroup(50, 50, 300, 300);
        topGroup.addChild(secondGroup);
        // this.topGraphics.redraw();
        // await this.waitForUser();
        this.message("Adding third group...")
        let thirdGroup = new SimpleGroup(50, 50, 200, 200);
        secondGroup.addChild(thirdGroup);
        // this.topGraphics.redraw();
        // await this.waitForUser();
        this.message("Adding fourth group...")
        let fourthGroup = new SimpleGroup(50, 50, 100, 100);
        thirdGroup.addChild(fourthGroup);
        this.topGraphics.redraw();
        // await this.waitForUser();
        this.message("Adding FilledRect to topGroup...");
        console.log("adding rect")
        let r = new FilledRect(0, 0, 100, 100, "red");
        let r2 = new FilledRect(0, 0, 100, 100, "blue");
        let r3 = new FilledRect(0, 100, 100, 100, "green");
        let r4  = new FilledRect(30, 16, 100, 36, "brown");
        topGroup.addChild(r);
        // console.log(fourthGroup.childToParent(fourthGroup.x, fourthGroup.y))
        // fourthGroup.addChild(r2);
        // fourthGroup.addChild(r3);
        // this.topGraphics.redraw();
        
        this.topGraphics.redraw();
        
        await this.waitForUser();

        // topGroup.removeChild(r);        
        // secondGroup.addChild(r);
        this.topGraphics.redraw();
        this.message("Adding FilledRect to secondGroup...");

        // topGroup.removeChild(r);
        



        // fourthGroup.addChild(r3);
        // fourthGroup.addChild(r4);

        
        // this.topGraphics.redraw();
        // // fourthGroup.children.map(child => console.log(child.x, child.y))

        // await this.waitForUser();
        // this.message("Adding FilledRect to secondGroup...");

        // console.log("the original bounding box before is: ", fourthGroup.getBoundingBox())
        // console.log(fourthGroup.resizeToChildren());

        // console.log("the new bounding box before is: ", fourthGroup.getBoundingBox())
        // console.log("the new rect box before is: ", r4.getBoundingBox())
        

        // this.topGraphics.redraw();
        // await this.waitForUser();
        // this.message("Adding FilledRect to thirdGroup...");
        // secondGroup.removeChild(r);
        // thirdGroup.addChild(r);
        // this.topGraphics.redraw();
        // await this.waitForUser();
        // this.message("Adding FilledRect to fourthGroup...");
        // thirdGroup.removeChild(r);
        // fourthGroup.addChild(r);
        // this.topGraphics.redraw();
        // await this.waitForUser();
        // this.message("Moving rectangle to 25,25 in fourthGroup...");
        // r.moveTo(25, 25);
        // this.topGraphics.redraw();
        // await this.waitForUser();


        this.message("moving topGroup from (0,0) to (50,50)...");
        topGroup.moveTo(50, 50);
        this.topGraphics.redraw();
        await this.waitForUser();
        this.message("moving fourthGroup from (50,50) to (-50,-50)...");
        fourthGroup.moveTo(-100, -100);
        this.topGraphics.redraw();
        await this.waitForUser();
        this.topGraphics.redraw();
		this.message("all done");
    }

    // async runTest() {
  
    //     this.message("topGroup for TestOutlineRect");
    //     let topGroup = new SimpleGroup (0,0,500, 500);
        
    //     this.topGraphics.addChild(topGroup); 

    //     this.message("creating red OutlineRect");

    //     let lineThickness = 2;

    //     let r = new OutlineRect(0, 0, 50, 50, "red", 2);
    //     console.log(r.getBoundingBox())
    //     // topGroup.addChild(r);

    //     let secondGroup = new SimpleGroup (100,100, 350, 350);
    //     topGroup.addChild(secondGroup)

    //     // this.topGraphics.redraw();

    //     let thirdGroup = new SimpleGroup (100,100, 200, 200);
    //     secondGroup.addChild(r)
    //     secondGroup.addChild(thirdGroup)
        

    //     // r.group = secondGroup;

    //     // let fourthGroup = new SimpleGroup (100,100, 200, 200);
    //     // thirdGroup.addChild(fourthGroup)

    //     this.topGraphics.redraw();

        
        
    // }
  }
  