import WorkSpace from '../WorkSpace';

export default class HAxis {
    constructor({
        y = 0,
        weight = 2,
        color = 'black',
        direction = 1,
        mStart = 20,
        mEnd = 20,
        hidden = false,
    }) {
        this.y = y;
        this.direction = direction;
        this.mStart = mStart;
        this.mEnd = mEnd;
        this.hidden = hidden;
        this.weight = weight;
        this.color = color;
    }

    render(workspace = new WorkSpace({}), key = 0) {
        if (this.hidden) {
            return null;
        }

        const startPoint = {
            x: -0.5 * workspace.width + this.mStart,
            y: workspace.origin.y - workspace.k * this.y,
        };
        const endPoint = {
            x: 0.5 * workspace.width - this.mEnd,
            y: workspace.origin.y - workspace.k * this.y,
        };
        const endLinePoint = { x: endPoint.x - this.weight * 3, y: endPoint.y };

        const arrowPoints = [
            {
                x: endPoint.x - this.weight * 3,
                y: endPoint.y - this.weight * 1.5,
            },
            {
                x: endPoint.x,
                y: endPoint.y,
            },
            {
                x: endPoint.x - this.weight * 3,
                y: endPoint.y + this.weight * 1.5,
            },
        ];
        const arrowPointsString = arrowPoints.map((point) => `${point.x}, ${point.y}`).join(' ');
        return (
            <g key={key}>
                <line
                    x1={startPoint.x}
                    y1={startPoint.y}
                    x2={endLinePoint.x}
                    y2={endLinePoint.y}
                    stroke={this.color}
                    strokeWidth={this.weight}
                />
                <polygon fill={this.color} points={arrowPointsString} />
            </g>
        );
    }

    getEndPoint(workspace = new WorkSpace({})) {
        const absoluteEndPointX = 0.5 * workspace.width - this.mEnd;
        const relativeEndPointX = (absoluteEndPointX - workspace.origin.x) / workspace.k;
        return { x: relativeEndPointX, y: this.y };
    }

    clone() {
        return new HAxis({
            y: this.y,
            direction: this.direction,
            mStart: this.mStart,
            mEnd: this.mEnd,
        });
    }
}
