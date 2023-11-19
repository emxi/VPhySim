import { useEffect, useRef, useState } from 'react';
import WorkSpace from '../utils/graphics/WorkSpace';
import Dot from '../utils/graphics/elements/Dot';
import Line from '../utils/graphics/elements/Line';
import Vector from '../utils/graphics/elements/Vector';
import useAnimation from '../utils/hooks/useAnimation';
import HAxis from '../utils/graphics/elements/HAxis';
import { useDimensions } from 'react-dimensions-hook';
import degToRad from '../utils/degToRad';
import GraphicWorkSpace from '../components/GraphicWorkSpace';
import Text from '../utils/graphics/elements/Text';

export default function TestPage() {
    const [angle, setAngle] = useState(0);

    const [start, pause, stop, reset] = useAnimation(
        (time) => {
            setAngle(() => time * 0.06);
        },
        undefined,
        () => {
            console.log('Stop by timeout');
        },
    );

    const workspace = new WorkSpace({
        w: 100,
        h: 100,
        k: 200,
    });

    const dot = new Dot({ x: 1 * Math.cos(degToRad(angle)), y: 0, r: 8, color: 'red' });
    const originDot = new Dot({ x: 0, y: 0, r: 4, color: 'green' });
    const vector1 = new Vector({
        x: 0,
        y: 0,
        length: 1,
        weight: 4,
        color: 'green',
        angle: angle,
        buffStart: 4,
        hidden: true,
    });
    const dot2 = new Dot({
        x: vector1.getEndPoint().x,
        y: vector1.getEndPoint().y,
        r: 6,
        color: 'blue',
    });
    const line2 = new Line({
        x1: dot.x,
        y1: dot.y,
        x2: vector1.getEndPoint().x,
        y2: vector1.getEndPoint().y,
    });

    const text = new Text({
        x: 0,
        y: 0,
        placementY: 'top',
        placementX: 'center',
        color: 'red',
        buffY: 8,
        fontSize: 20,
    });

    const hAxis = new HAxis({});
    workspace.add(hAxis);
    workspace.add(originDot);
    workspace.add(dot2);
    workspace.add(dot);
    // workspace.add(line2);
    workspace.add(vector1);
    workspace.add(text);
    return (
        <div>
            <div className="h-[500px] bg-gray-50">
                <GraphicWorkSpace workspace={workspace} />
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
