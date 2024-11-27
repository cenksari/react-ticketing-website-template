'use client';

import { useRef, useState, useEffect, useCallback } from 'react';

// interfaces
interface IProps {
  children: React.ReactNode;
}

const Slider = ({ children }: IProps): JSX.Element => {
  const startX = useRef<number>(0);
  const isDown = useRef<boolean>(false);
  const scrollLeftX = useRef<number>(0);
  const preventClick = useRef<boolean>(false);
  const navReference = useRef<HTMLDivElement | any>(null);

  const [leftArrowDisable, setLeftArrowDisable] = useState<boolean>(true);
  const [rightArrowDisable, setRightArrowDisable] = useState<boolean>(false);

  /**
   * This function is used to handle the buttons in the slider.
   * It checks if the left or right scroll buttons should be disabled based on the scroll position.
   */
  const buttons = (): void => {
    const { offsetWidth, scrollWidth, scrollLeft } = navReference.current;

    const hideLeftScroll: boolean = scrollLeft <= 0;

    const hideRightScroll: boolean = scrollWidth - Math.round(scrollLeft | 0) <= offsetWidth + 1;

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

  /**
   * This function handles the click event on the slider.
   * It prevents the default click behavior if the preventClick flag is set to true.
   *
   * @param {MouseEvent} e - The mouse event object.
   */
  const click = (e: MouseEvent): void => {
    if (preventClick.current) {
      e.preventDefault();
    }
  };

  /**
   * This function is used to handle the horizontal scrolling of the slider.
   * It updates the scroll position based on the mouse movement.
   *
   * @param {MouseEvent} e - The mouse event object.
   */
  const scroll = useCallback(() => {
    buttons();
  }, []);

  /**
   * This function is used to handle the mouse up event on the slider.
   * It sets the isDown state to false, indicating that the mouse is no longer down.
   */
  const mouseUp = (): void => {
    isDown.current = false;
  };

  /**
   * This function is used to handle the mouse down event on the slider.
   * It sets the isDown state to true, indicating that the mouse is down, and initializes
   * the starting position of the mouse and the current scroll position of the navigation.
   * It also sets preventClick to false to allow the click event to be handled.
   * Finally, it calls the buttons function to update the state of the left and right arrows.
   *
   * @param {MouseEvent} e - The mouse event object.
   */
  const mouseDown = useCallback((e: MouseEvent) => {
    e.preventDefault();

    isDown.current = true;

    startX.current = e.pageX - navReference.current.offsetLeft;

    scrollLeftX.current = navReference.current.scrollLeft;

    preventClick.current = false;

    buttons();
  }, []);

  /**
   * This function is used to handle the mouse move event on the slider.
   * It updates the scroll position based on the mouse movement while the mouse is down.
   * It also sets preventClick to true to prevent the click event from being handled.
   * Finally, it calls the buttons function to update the state of the left and right arrows.
   *
   * @param {MouseEvent} e - The mouse event object.
   */
  const mouseMove = useCallback((e: MouseEvent) => {
    if (!isDown.current) return;

    e.preventDefault();

    const x: number = e.pageX - navReference.current.offsetLeft;

    const walk: number = x - startX.current;

    navReference.current.scrollLeft = scrollLeftX.current - walk;

    preventClick.current = true;

    buttons();
  }, []);

  /**
   * This function is used to handle the mouse leave event on the slider.
   * It sets the isDown state to false, indicating that the mouse is no longer down,
   * and sets preventClick to false to allow the click event to be handled.
   */
  const mouseLeave = (): void => {
    isDown.current = false;

    preventClick.current = false;
  };

  /**
   * Handles horizontal scrolling of the slider.
   *
   * This function scrolls the slider horizontally by a specified step at a given speed.
   * It stops scrolling when the total scroll amount reaches 320 pixels.
   *
   * @param {number} speed - The speed of the scroll in milliseconds.
   * @param {number} step - The step size of each scroll.
   */
  const handleHorizantalScroll = (speed: number, step: number): void => {
    let scrollAmount: number = 0;

    const slideTimer = setInterval(() => {
      navReference.current.scrollLeft += step;

      scrollAmount += Math.abs(step);

      if (scrollAmount >= 320) {
        clearInterval(slideTimer);
      }

      buttons();
    }, speed);
  };

  useEffect(() => {
    buttons();

    const elementRef: HTMLDivElement = navReference.current;

    window.addEventListener('resize', scroll);
    elementRef.addEventListener('click', click);
    elementRef.addEventListener('scroll', scroll);
    elementRef.addEventListener('mouseup', mouseUp);
    elementRef.addEventListener('mousedown', mouseDown);
    elementRef.addEventListener('mousemove', mouseMove);
    elementRef.addEventListener('mouseleave', mouseLeave);

    return () => {
      window.removeEventListener('resize', scroll);
      elementRef.removeEventListener('click', click);
      elementRef.removeEventListener('scroll', scroll);
      elementRef.removeEventListener('mouseup', mouseUp);
      elementRef.removeEventListener('mousedown', mouseDown);
      elementRef.removeEventListener('mousemove', mouseMove);
      elementRef.removeEventListener('mouseleave', mouseLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='scroll-container'>
      {!leftArrowDisable && (
        <div className='left-arrow'>
          <button
            type='button'
            disabled={leftArrowDisable}
            className={
              leftArrowDisable ? 'button-gray button-circle' : 'button-default button-circle'
            }
            onClick={() => {
              handleHorizantalScroll(15, -20);
            }}
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
              rightArrowDisable ? 'button-gray button-circle' : 'button-default button-circle'
            }
            onClick={() => {
              handleHorizantalScroll(15, 20);
            }}
          >
            <span className='material-symbols-outlined'>chevron_right</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Slider;
