import WorkSpace from '../WorkSpace';

export default function getAbsolutePosition(x, y, workspace = new WorkSpace()) {
    const origin = workspace.origin;
    const k = workspace.k;
    return {
        x: origin.x + k * x,
        y: origin.y - k * y,
    };
}
