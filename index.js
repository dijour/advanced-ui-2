const canvas = document.getElementById("drawCanvas");
const topGraphics = new TopGraphics (canvas);

/* PUT TESTING HERE */

/* only uncomment one of these at a time */
// const t1 = new TestNesting(topGraphics);
// const t1 = new TestHomework2(topGraphics);
// const t1 = new TestBounds(topGraphics);
// const t1 = new TestScaledGroup(topGraphics);
// const t1 = new TestLayout(topGraphics);
// const t1 = new TestTestHarness(topGraphics);
// const t1 = new TestAllObjects(topGraphics);
// const t1 = new TestLayoutGroup(topGraphics);
// const t1 = new TestOutlineRect(topGraphics);
// const t1 = new TestRect(topGraphics);
const t1 = new TestSimpleGroup(topGraphics);
// const t1 = new TestIcon(topGraphics);
// const t1 = new TestLine(topGraphics);

t1.runTest();