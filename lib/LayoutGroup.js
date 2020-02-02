/* LayoutGroup sets the x,y of each child so they are layed out in a row or column,
depending on the layout parameter.
There is offset distance between each child object, which can be negative.
*/
const HORIZONTAL = 0;
const VERTICAL = 1;
class LayoutGroup extends Group {
    constructor(x = 0, y = 0, width = 100, height = 100, layout = HORIZONTAL, offset = 10) {
        super(x, y, width, height);
    }
}
