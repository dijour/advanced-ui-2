const canvas = document.getElementById("drawCanvas");
const topGraphics = new TopGraphics (canvas);

/* PUT TESTING HERE */

/* only uncomment one of these at a time */
// const t1 = new TestTestHarness(topGraphics);
// const t1 = new TestAllObjects(topGraphics);
// const t1 = new TestLayoutGroup(topGraphics);
// const t1 = new TestOutlineRect(topGraphics);
// const t1 = new TestRect(topGraphics);
const t1 = new TestSimpleGroup(topGraphics);

t1.runTest();

// const canvasClick = (e) => {
//     console.log(e)
// }

// console.log(topGraphics)

// const defaultStarterElement = {
//     inProgress: undefined,
//     type: undefined,
//     x1: undefined,
//     x2: undefined,
//     y1: undefined,
//     y2: undefined
// }

// let state = {
//     mode: 'FilledRect',
//     modes: {
//         1: 'FilledRect',
//         2: 'OutlineRect'
//     },
//     mouseDown: {
//         x: 0,
//         y: 0
//     },
//     currentElement: {
//         inProgress: undefined,
//         type: undefined,
//         x1: undefined,
//         x2: undefined,
//         y1: undefined,
//         y2: undefined,
//         lineThickness: 4,
//         color: "blue"
//     }
// }


// canvas.onclick = (e => canvasClick(e));

// const beginDraw = (e) => {
//     state.currentElement.inProgress = true;
//     state.currentElement.type = state.mode;
//     state.mouseDown = {x: e.x, y: e.y};
//     console.log(state)
// } 

// const finishDraw = (e) => {
//     state.currentElement.inProgress = false;
//     let newGraphic;
//     if (true) {
//         newGraphic = new OutlineRect(
//             x = Math.min(state.x1, state.x2),
//             y = Math.min(state.y1, state.y2), 
//             width = Math.max(state.x1 - state.x2, state.x2 - state.x1),
//             height = Math.max(state.y1 - state.y2, state.y2 - state.y1),
//             color = state.color,
//             lineThickness = state.lineThickness
//         );
//     }
//     topGraphics.addChild(newGraphic);
//     state.currentElement.type = state.mode;
//     state.mouseDown = {x: e.x, y: e.y};
//     console.log(state)
//     console.log(topGraphics.children)
// } 

// canvas.onmousedown = (e => beginDraw(e))

// canvas.onmouseup = (e => finishDraw(e))