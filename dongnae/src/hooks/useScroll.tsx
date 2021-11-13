import React, { useState, useEffect, useRef } from 'react';
import Scrollbar from 'smooth-scrollbar';

export function useScroll() {
    const scrollbar = Scrollbar.init(document.querySelector('#dongnae-body') as HTMLElement);

    const [scrollY, setScrollY] = useState<number>(scrollbar.offset.y);
    const [scrollX, setScrollX] = useState<number>(scrollbar.offset.x);
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

    const lastScrollTopRef = useRef(0);

    const listener = () => {
        setScrollY(scrollbar.offset.y);
        setScrollX(scrollbar.offset.x);
        setScrollDirection(lastScrollTopRef.current > scrollY + 5 ? 'down' : 'up');
        lastScrollTopRef.current = scrollY;
    };

    useEffect(() => {
        scrollbar.addListener(listener);
        return () => scrollbar.removeListener(listener);
    });

    return {
        scrollY,
        scrollX,
        scrollDirection,
    };
}
