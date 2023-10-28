import getAbsolutePosition from '../utils/getAbsolutePosition';

export default class Dot {
    constructor({ x = 0, y = 0, color = '#000', r = 4, buffX = 0, buffY = 0, hidden = false }) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.r = r;
        this.buffX = buffX;
        this.buffY = buffY;
        this.hidden = hidden;
    }

    render(workspace = new WorkSpace(), key = 0) {
        if (this.hidden) {
            return null;
        }
        const absolutePoint = getAbsolutePosition(this.x, this.y, workspace);
        return (
            <circle
                key={key}
                cx={absolutePoint.x + this.buffX}
                cy={absolutePoint.y + this.buffY}
                r={this.r}
                fill={this.color}
            />
        );
    }

    clone() {
        return new Dot({
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
