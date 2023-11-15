import { useEffect, useRef } from 'react';

export default function useAnimation(callback, duration = Infinity, onTimeout) {
    const requestRef = useRef();
    const previousTimeRef = useRef();
    const timeRef = useRef(0);

    function animate(time) {
        if (previousTimeRef.current != undefined) {
            const deltaTime = time - previousTimeRef.current;
            timeRef.current += deltaTime;

            if (timeRef.current >= duration) {
                timeRef.current = duration;
            }

            callback(timeRef.current, deltaTime);
        }
        previousTimeRef.current = time;
        if (timeRef.current >= duration) {
            stopAnimation();
            onTimeout && onTimeout();
        } else {
            requestRef.current = requestAnimationFrame(animate);
        }
    }

    function startAnimation() {
        if (!requestRef.current) {
            requestRef.current = requestAnimationFrame(animate);
        }
    }

    function pauseAnimation() {
        if (requestRef.current) {
            cancelAnimationFrame(requestRef.current);
            previousTimeRef.current = undefined;
            requestRef.current = undefined;
        }
    }

    function stopAnimation() {
        if (requestRef.current) {
            cancelAnimationFrame(requestRef.current);
            previousTimeRef.current = undefined;
            requestRef.current = undefined;
            timeRef.current = 0;
        }
    }

    function reset() {
        timeRef.current = 0;
    }

    useEffect(() => {
        return () => {
            stopAnimation();
            console.log('unmounted');
        };
    }, []);

    return [startAnimation, pauseAnimation, stopAnimation, reset];
}
