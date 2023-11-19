import WorkSpace from '../WorkSpace';
import getAbsolutePosition from '../utils/getAbsolutePosition';

export default class Text {
    constructor({
        x = 0,
        y = 0,
        content = 'Text',
        color = '#000',
        placementX = 'center',
        placementY = 'center',
        buffX = 4,
        buffY = 4,
        fontSize = 16,
        fontWeight = 400,
        fontStyle = 'normal',
        hidden = false,
    }) {
        this.x = x;
        this.y = y;
        this.content = content;
        this.color = color;
        this.placementX = placementX;
        this.placementY = placementY;
        this.buffX = buffX;
        this.buffY = buffY;
        this.fontSize = fontSize;
        this.fontWeight = fontWeight;
        this.fontStyle = fontStyle;
        this.hidden = hidden;
    }

    render(workspace = new WorkSpace({}), key = 0) {
        if (this.hidden) {
            return null;
        }
        const absolutePoint = getAbsolutePosition(this.x, this.y, workspace);

        let alignmentBaseline = 'middle';
        if (this.placementY == 'top') {
            alignmentBaseline = 'hanging';
            absolutePoint.y += this.buffY;
        }
        if (this.placementY == 'bottom') {
            alignmentBaseline = 'text-after-edge';
            absolutePoint.y -= this.buffY;
        }
        if (this.placementY == 'center') {
            alignmentBaseline = 'middle';
        }

        let textAnchor = 'middle';
        if (this.placementX == 'left') {
            textAnchor = 'start';
            absolutePoint.x += this.buffX;
        }
        if (this.placementX == 'right') {
            textAnchor = 'end';
            absolutePoint.x -= this.buffX;
        }
        if (this.placementX == 'center') {
            textAnchor = 'middle';
        }

        return (
            <text
                key={key}
                x={absolutePoint.x}
                y={absolutePoint.y}
                alignmentBaseline={alignmentBaseline}
                textAnchor={textAnchor}
                fontSize={this.fontSize}
                fontWeight={this.fontWeight}
                fontStyle={this.fontStyle}
                fill={this.color}
            >
                {this.content}
            </text>
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
