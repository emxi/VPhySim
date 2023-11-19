import { useDimensions } from 'react-dimensions-hook';
import WorkSpace from '../utils/graphics/WorkSpace';

export default function GraphicWorkSpace({ workspace = new WorkSpace({}) }) {
    const { ref, dimensions } = useDimensions();
    workspace.width = dimensions.width;
    workspace.height = dimensions.height;
    return (
        <div ref={ref} className="flex h-full w-full items-center justify-center">
            {workspace.render()}
        </div>
    );
}
