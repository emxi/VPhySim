import degToRad from '../../degToRad';
import WorkSpace from '../WorkSpace';
import getAbsolutePosition from '../utils/getAbsolutePosition';

export default class Vector {
    constructor({
        x = 0,
        y = 0,
        length = 1,
        angle = 0,
        color = '#000',
        weight = 2,
        buffStart = 0,
        buffEnd = 0,
        hidden = false,
    }) {
        this.x = x;
        this.y = y;
        this.length = length;
        this.angle = angle;
        this.color = color;
        this.weight = weight;
        this.buffStart = buffStart;
        this.buffEnd = buffEnd;
        this.hidden = hidden;
    }

    render(workspace = new WorkSpace({}), key = 0) {
        if (this.hidden) {
            return null;
        }

        const inSvgPoint1 = { x: this.buffStart, y: 0 };
        const inSvgPoint2 = { x: workspace.k * this.length + this.buffEnd, y: 0 };

        const svgPoint = getAbsolutePosition(this.x, this.y, workspace);

        inSvgPoint2.x -= this.weight * 3;
        if (inSvgPoint2.x < inSvgPoint1.x) {
            inSvgPoint2.x = inSvgPoint1.x;
        }

        const inSvgPointArrow = { x: workspace.k * this.length, y: 0 };
        inSvgPointArrow.x += this.buffEnd;
        const arrowPoints = [
            {
                x: inSvgPointArrow.x - this.weight * 3,
                y: inSvgPointArrow.y - this.weight * 1.5,
            },
            {
                x: inSvgPointArrow.x,
                y: inSvgPointArrow.y,
            },
            {
                x: inSvgPointArrow.x - this.weight * 3,
                y: inSvgPointArrow.y + this.weight * 1.5,
            },
        ];
        const arrowPointsString = arrowPoints.map((point) => `${point.x}, ${point.y}`).join(' ');
        return (
            <g key={key}>
                <svg
                    viewBox="0 0 1 1"
                    width="1"
                    height="1"
                    overflow="visible"
                    x={svgPoint.x}
                    y={svgPoint.y}
                >
                    <g transform={`rotate(${-this.angle}, 0, 0)`}>
                        <line
                            x1={inSvgPoint1.x}
                            y1={inSvgPoint1.y}
                            x2={inSvgPoint2.x}
                            y2={inSvgPoint2.y}
                            stroke={this.color}
                            strokeWidth={this.weight}
                        />
                        <polygon fill={this.color} points={arrowPointsString} />
                    </g>
                </svg>
            </g>
        );
    }

    getEndPoint() {
        const endPoint = {
            x: this.x + this.length * Math.cos(degToRad(-this.angle)),
            y: this.y + this.length * Math.sin(degToRad(this.angle)),
        };

        return endPoint;
    }

    clone() {
        return new Vector({
            x: this.x,
            y: this.y,
            length: this.length,
            angle: this.angle,
            color: this.color,
            weight: this.weight,
            buffStart: this.buffStart,
            buffEnd: this.buffEnd,
            hidden: this.hidden,
        });
    }
}
