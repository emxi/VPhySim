import WorkSpace from '../WorkSpace';
import getAbsolutePosition from '../utils/getAbsolutePosition';

export default class Line {
    constructor({
        x1 = 0,
        y1 = 0,
        x2 = 0,
        y2 = 0,
        color = '#000',
        weight = 2,
        buffX = 0,
        buffY = 0,
        hidden = false,
    }) {
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
        this.color = color;
        this.weight = weight;
        this.buffX = buffX;
        this.buffY = buffY;
        this.hidden = hidden;
    }

    render(workspace = new WorkSpace({}), key = 0) {
        if (this.hidden) {
            return null;
        }
        const absolutePoint1 = getAbsolutePosition(this.x1, this.y1, workspace);
        const absolutePoint2 = getAbsolutePosition(this.x2, this.y2, workspace);
        return (
            <line
                key={key}
                x1={absolutePoint1.x + this.buffX}
                y1={absolutePoint1.y + this.buffY}
                x2={absolutePoint2.x + this.buffX}
                y2={absolutePoint2.y + this.buffY}
                stroke={this.color}
                strokeWidth={this.weight}
            />
        );
    }

    clone() {
        return new Line({
            x: this.x,
            y: this.y,
            color: this.color,
            r: this.r,
            buffX: this.buffX,
            buffY: this.buffY,
            hidden: this.hidden,
        });
    }
}
