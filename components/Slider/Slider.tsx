'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';

type Props = {
  children: React.ReactNode;
};

const Slider = ({ children }: Props) => {
  const startX = useRef<number>(0);
  const isDown = useRef<boolean>(false);
  const scrollLeftX = useRef<number>(0);
  const preventClick = useRef<boolean>(false);
  const navReference = useRef<HTMLDivElement>(null);

  const [leftArrowDisable, setLeftArrowDisable] = useState<boolean>(true);
  const [rightArrowDisable, setRightArrowDisable] = useState<boolean>(false);

  const buttons = () => {
    const { offsetWidth, scrollWidth, scrollLeft } = navReference.current;

    const hideLeftScroll: boolean = scrollLeft <= 0;

    const hideRightScroll: boolean = scrollWidth - Math.round(scrollLeft) <= offsetWidth;

    if (hideLeftScroll) {
      setLeftArrowDisable(true);
    } else {
      setLeftArrowDisable(false);
    }

    if (hideRightScroll) {
      setRightArrowDisable(true);
    } else {
      setRightArrowDisable(false);
    }
  };

  // const wheel = (e) => {
  //   if (e.deltaY === 0) return;

  //   e.preventDefault();

  //   navRef.current.scrollTo({
  //     left: navRef.current.scrollLeft + e.deltaY,
  //   });
  // };

  const click = (e: MouseEvent) => {
    if (preventClick.current) {
      e.preventDefault();
    }
  };

  const scroll = useCallback(() => {
    buttons();
  }, []);

  const mouseUp = () => {
    isDown.current = false;
  };

  const mouseDown = useCallback((e: MouseEvent) => {
    e.preventDefault();

    isDown.current = true;

    startX.current = e.pageX - navReference.current.offsetLeft;

    scrollLeftX.current = navReference.current.scrollLeft;

    preventClick.current = false;

    buttons();
  }, []);

  const mouseMove = useCallback((e: MouseEvent) => {
    if (!isDown.current) return;

    e.preventDefault();

    const x: number = e.pageX - navReference.current.offsetLeft;

    const walk: number = x - startX.current;

    navReference.current.scrollLeft = scrollLeftX.current - walk;

    preventClick.current = true;

    buttons();
  }, []);

  const mouseLeave = () => {
    isDown.current = false;
  };

  useEffect(() => {
    buttons();

    const elementRef: HTMLDivElement = navReference.current;

    window.addEventListener('resize', scroll);
    // elementRef.addEventListener('wheel', wheel);
    elementRef.addEventListener('click', click);
    elementRef.addEventListener('scroll', scroll);
    elementRef.addEventListener('mouseup', mouseUp);
    elementRef.addEventListener('mousedown', mouseDown);
    elementRef.addEventListener('mousemove', mouseMove);
    elementRef.addEventListener('mouseleave', mouseLeave);

    const { offsetWidth, scrollWidth } = elementRef;

    if (offsetWidth === scrollWidth) {
      setRightArrowDisable(true);
    }

    return () => {
      window.removeEventListener('resize', scroll);
      // elementRef.removeEventListener('wheel', wheel);
      elementRef.removeEventListener('click', click);
      elementRef.removeEventListener('scroll', scroll);
      elementRef.removeEventListener('mouseup', mouseUp);
      elementRef.removeEventListener('mousedown', mouseDown);
      elementRef.removeEventListener('mousemove', mouseMove);
      elementRef.removeEventListener('mouseleave', mouseLeave);
    };
  }, [mouseDown, mouseMove, scroll]);

  const handleHorizantalScroll = (element: HTMLDivElement, speed: number, step: number) => {
    let scrollAmount: number = 0;

    const slideTimer = setInterval(() => {
      const e: HTMLDivElement = element;

      e.scrollLeft += step;

      scrollAmount += Math.abs(step);

      if (scrollAmount >= 320) {
        clearInterval(slideTimer);
      }

      buttons();
    }, speed);
  };

  return (
    <div className='scroll-container'>
      {!leftArrowDisable && (
        <div className='left-arrow'>
          <button
            type='button'
            disabled={leftArrowDisable}
            className={
              leftArrowDisable
                ? 'button button-gray button-circle'
                : 'button button-default button-circle'
            }
            onClick={() => handleHorizantalScroll(navReference.current, 15, -20)}
          >
            <span className='material-symbols-outlined'>chevron_left</span>
          </button>
        </div>
      )}
      <div className='scrollable' ref={navReference}>
        {children}
      </div>
      {!rightArrowDisable && (
        <div className='right-arrow'>
          <button
            type='button'
            disabled={rightArrowDisable}
            className={
              rightArrowDisable
                ? 'button button-gray button-circle'
                : 'button button-default button-circle'
            }
            onClick={() => handleHorizantalScroll(navReference.current, 15, 20)}
          >
            <span className='material-symbols-outlined'>chevron_right</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Slider;
