export default class WorkSpace {
    _elements = [];
    constructor({ originX = 0, originY = 0, k = 100 }) {
        this.origin = { x: originX, y: originY };
        this.k = k;
    }

    add(elem) {
        this._elements.push(elem);
    }

    render() {
        return (
            <svg
                viewBox={`0 0 1 1`}
                width="1"
                height="1"
                xmlns="http://www.w3.org/2000/svg"
                overflow="visible"
            >
                {this._elements.map((elem, index) => elem.render(this, index))}
            </svg>
        );
    }
}
