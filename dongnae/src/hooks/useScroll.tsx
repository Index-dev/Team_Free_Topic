import React, { useState, useEffect, useRef } from 'react';

export function useScroll() {
    const [bodyOffset, setBodyOffset] = useState<DOMRect>(document.body.getBoundingClientRect());
    const [scrollY, setScrollY] = useState<number>(bodyOffset.top);
    const [scrollX, setScrollX] = useState<number>(bodyOffset.left);
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

    const lastScrollTopRef = useRef(0);
    const lastScrollTop = lastScrollTopRef.current;
    const listener = () => {
        setBodyOffset(document.body.getBoundingClientRect());
        setScrollY(-bodyOffset.top);
        setScrollX(bodyOffset.left);
        setScrollDirection(lastScrollTop > -bodyOffset.top ? 'down' : 'up');
        lastScrollTopRef.current = -bodyOffset.top;
    };

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
