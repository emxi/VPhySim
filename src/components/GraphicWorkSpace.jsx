import { useDimensions } from 'react-dimensions-hook';
import WorkSpace from '../utils/graphics/WorkSpace';
import { useEffect } from 'react';

export default function GraphicWorkSpace({ workspace = new WorkSpace({}) }) {
    const { ref, dimensions } = useDimensions();
    workspace.width = dimensions.width;
    workspace.height = dimensions.height;
    workspace.beforeRender();
    return (
        <div ref={ref} className="flex h-full w-full items-center justify-center">
            {workspace.render()}
        </div>
    );
}
