import WorkSpace from '../utils/graphics/WorkSpace';
import Dot from '../utils/graphics/elements/Dot';
import Line from '../utils/graphics/elements/Line';
import Vector from '../utils/graphics/elements/Vector';

export default function TestPage() {
    const workspace = new WorkSpace({ w: 100, h: 100, k: 100 });
    const dot = new Dot({ x: 0, y: 0, r: 8, color: 'red' });
    const dot2 = new Dot({ x: 1, y: 0, r: 6, color: 'blue' });
    const dot3 = new Dot({ x: 2, y: 0, color: 'blue' });
    const line = new Line({ x1: 0, y1: 0, x2: 4, y2: 0 });
    const vector1 = new Vector({
        x: 0,
        y: 0,
        length: 1,
        weight: 4,
        color: 'green',
        angle: 0,
        buffStart: 4,
    });
    workspace.add(dot);
    workspace.add(dot2);
    workspace.add(dot3);
    workspace.add(line);
    workspace.add(vector1);
    return (
        <div className="flex h-[500px] items-center justify-center bg-gray-50">
            {workspace.render()}
        </div>
    );
}
