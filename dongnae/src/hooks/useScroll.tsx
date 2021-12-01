import React, { useState, useEffect, useRef } from 'react';

export function useScroll() {
    const [scrollY, setScrollY] = useState<number>(window.scrollY);
    const [scrollX, setScrollX] = useState<number>(window.scrollX);
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

    const lastScrollTopRef = useRef(0);
    const listener = () => {
        setScrollY(window.scrollY);
        setScrollX(window.scrollX);
        setScrollDirection(lastScrollTopRef.current > window.scrollY ? 'up' : 'down');
        lastScrollTopRef.current = window.scrollY;
    };

    useEffect(() => {
        const checkTimeout = setTimeout(() => {
            if (scrollDirection === 'up') {
                setScrollDirection('down');
            }
        }, 5000);

        return () => clearTimeout(checkTimeout);
    }, [scrollDirection]);

    useEffect(() => {
        window.addEventListener('scroll', listener, { capture: true });
        return () => window.removeEventListener('scroll', listener);
    }, []);

    return {
        scrollY,
        scrollX,
        scrollDirection,
    };
}
