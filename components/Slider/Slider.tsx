'use client';

import { useRef, useState, useEffect, useCallback } from 'react';

// interfaces
interface IProps {
  touch?: boolean;
  margin?: number;
  children: React.ReactNode;
}

const Slider: React.FC<IProps> = ({ margin, touch, children }) => {
  const startX = useRef<number>(0);
  const isDown = useRef<boolean>(false);
  const itemWidth = useRef<number>(0);
  const scrollLeftX = useRef<number>(0);
  const preventClick = useRef<boolean>(false);
  const movedDistance = useRef<number>(0);
  const navReferenceDiv = useRef<HTMLDivElement | null>(null);

  const [leftArrowDisabled, setLeftArrowDisabled] = useState<boolean>(true);
  const [rightArrowDisabled, setRightArrowDisabled] = useState<boolean>(false);

  /**
   * Updates the disabled state of the left and right arrow buttons based on the current scroll position.
   * If the current scroll position is at the start or the end, the corresponding arrow will be disabled.
   */
  const updateButtons = () => {
    const { offsetWidth, scrollWidth, scrollLeft } = navReferenceDiv.current!;

    setLeftArrowDisabled(scrollLeft <= 0);

    setRightArrowDisabled(scrollWidth - Math.round(scrollLeft) <= offsetWidth + 1);
  };

  /**
   * Handles mouse movement during a drag interaction.
   * Updates the scroll position based on the amount the mouse has moved.
   * Prevents click event if the mouse has been dragged more than 5 pixels.
   *
   * @param e - The `MouseEvent` representing the mouse move event.
   */
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDown.current) return;

    const x = e.pageX - navReferenceDiv.current!.offsetLeft;

    const walk = x - startX.current;

    navReferenceDiv.current!.scrollLeft = scrollLeftX.current - walk;

    movedDistance.current = Math.abs(walk);

    preventClick.current = movedDistance.current > 5;

    updateButtons();
  }, []);

  /**
   * Initiates a drag interaction when the mouse button is pressed down on the navigation element.
   * Records the starting X position of the mouse and the initial scroll position.
   *
   * @param e - The `MouseEvent` representing the mouse down event.
   */
  const handleMouseDown = useCallback((e: MouseEvent) => {
    e.preventDefault();

    isDown.current = true;

    startX.current = e.pageX - navReferenceDiv.current!.offsetLeft;

    scrollLeftX.current = navReferenceDiv.current!.scrollLeft;

    preventClick.current = false;

    movedDistance.current = 0;

    updateButtons();
  }, []);

  /**
   * Ends the drag interaction when the mouse button is released.
   */
  const handleMouseUp = () => {
    isDown.current = false;
  };

  /**
   * Ends the drag interaction when the mouse leaves the navigation area.
   */
  const handleMouseLeave = () => {
    isDown.current = false;
    preventClick.current = false;
  };

  /**
   * Updates the arrow button state during scrolling.
   * Calls the `updateButtons` function to determine whether the left or right arrow buttons should be disabled.
   */
  const handleScroll = useCallback(updateButtons, []);

  /**
   * Prevents the default click action if the mouse has been dragged to avoid accidental clicks on child elements during scrolling.
   *
   * @param e - The `MouseEvent` representing the click event.
   */
  const handleClick = (e: MouseEvent) => {
    if (preventClick.current) {
      e.preventDefault();
    }
  };

  /**
   * Scrolls the navigation container horizontally by one item width.
   * This function performs a smooth horizontal scroll based on the direction ('left' or 'right').
   * It scrolls exactly by one element width for each click.
   *
   * @param direction - A string indicating the direction to scroll, either 'left' or 'right'.
   */
  const handleHorizontalScroll = (direction: 'left' | 'right') => {
    const scrollAmount = direction === 'left' ? -itemWidth.current : itemWidth.current;

    navReferenceDiv.current!.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });

    updateButtons();
  };

  /**
   * Sets up the scroll functionality and event listeners on the navigation element.
   * Calculates the width of the first child element to use for scrolling by item width.
   * Adds event listeners for mouse interaction, scrolling, and resizing.
   */
  useEffect(() => {
    const currentNav = navReferenceDiv.current!;

    // Get the width of the first child element and store it in itemWidth.current
    if (currentNav.children.length > 0) {
      const firstChild = currentNav.children[0] as HTMLElement;

      itemWidth.current = firstChild.offsetWidth + (margin ?? 0);
    }

    updateButtons();

    window.addEventListener('resize', updateButtons);
    currentNav.addEventListener('click', handleClick);
    currentNav.addEventListener('scroll', handleScroll);

    if (touch) {
      currentNav.addEventListener('mouseup', handleMouseUp);
      currentNav.addEventListener('mousedown', handleMouseDown);
      currentNav.addEventListener('mousemove', handleMouseMove);
      currentNav.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      window.removeEventListener('resize', updateButtons);
      currentNav.removeEventListener('click', handleClick);
      currentNav.removeEventListener('scroll', handleScroll);

      if (touch) {
        currentNav.removeEventListener('mouseup', handleMouseUp);
        currentNav.removeEventListener('mousedown', handleMouseDown);
        currentNav.removeEventListener('mousemove', handleMouseMove);
        currentNav.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [touch, margin, handleMouseMove, handleMouseDown, handleScroll]);

  return (
    <div className='scroll-container'>
      {!leftArrowDisabled && (
        <div className='left-arrow'>
          <button
            type='button'
            disabled={leftArrowDisabled}
            onClick={() => handleHorizontalScroll('left')}
            className={`button-circle ${leftArrowDisabled ? 'button-gray' : 'button-default'}`}
          >
            <span className='material-symbols-outlined'>chevron_left</span>
          </button>
        </div>
      )}
      <div className='scrollable' ref={navReferenceDiv}>
        {children}
      </div>
      {!rightArrowDisabled && (
        <div className='right-arrow'>
          <button
            type='button'
            disabled={rightArrowDisabled}
            onClick={() => handleHorizontalScroll('right')}
            className={`button-circle ${rightArrowDisabled ? 'button-gray' : 'button-default'}`}
          >
            <span className='material-symbols-outlined'>chevron_right</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Slider;
