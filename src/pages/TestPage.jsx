import { useEffect, useRef, useState } from 'react';
import WorkSpace from '../utils/graphics/WorkSpace';
import Dot from '../utils/graphics/elements/Dot';
import Line from '../utils/graphics/elements/Line';
import Vector from '../utils/graphics/elements/Vector';
import useAnimation from '../utils/hooks/useAnimation';

export default function TestPage() {
    const [angle, setAngle] = useState(0);

    const [start, pause, stop, reset] = useAnimation(
        (time) => {
            setAngle(() => time * 0.18);
        },
        5000,
        () => {
            console.log('Stop by timeout');
        },
    );

    function degrees_to_radians(degrees) {
        var pi = Math.PI;
        return degrees * (pi / 180);
    }

    const workspace = new WorkSpace({ w: 100, h: 100, k: 200 });
    const dot = new Dot({ x: 1 * Math.cos(degrees_to_radians(angle)), y: 0, r: 8, color: 'red' });
    const dot2 = new Dot({ x: 1, y: 0, r: 6, color: 'blue' });
    const dot3 = new Dot({ x: 2, y: 0, color: 'blue' });
    const line = new Line({ x1: 0, y1: 0, x2: 4, y2: 0 });
    const vector1 = new Vector({
        x: 0,
        y: 0,
        length: 1,
        weight: 4,
        color: 'green',
        angle: angle,
        buffStart: 4,
    });
    workspace.add(dot);
    workspace.add(dot2);
    workspace.add(dot3);
    workspace.add(line);
    workspace.add(dot);
    workspace.add(dot2);
    workspace.add(dot3);
    workspace.add(line);
    workspace.add(dot);
    workspace.add(dot2);
    workspace.add(dot3);
    workspace.add(line);
    workspace.add(dot);
    workspace.add(dot2);
    workspace.add(dot3);
    workspace.add(line);
    workspace.add(dot);
    workspace.add(dot2);
    workspace.add(dot3);
    workspace.add(line);
    workspace.add(dot);
    workspace.add(dot2);
    workspace.add(dot3);
    workspace.add(line);
    workspace.add(dot);
    workspace.add(dot2);
    workspace.add(dot3);
    workspace.add(line);
    workspace.add(vector1);
    return (
        <div>
            <div className="flex h-[500px] items-center justify-center bg-gray-50">
                {workspace.render()}
            </div>
            <div className="space-x-2 p-6">
                <button onClick={() => start()}>Run</button>
                <button onClick={() => pause()}>Pause</button>
                <button onClick={() => stop()}>Stop</button>
                <button onClick={() => reset()}>Reset</button>
            </div>
        </div>
    );
}
