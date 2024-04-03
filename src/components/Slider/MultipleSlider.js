import { memo, useRef, useEffect, useState } from 'react';

import PropTypes from 'prop-types';

const MultipleSlider = memo(({ children }) => {
  const navRef = useRef(null);
  const startX = useRef(null);
  const isDown = useRef(false);
  const scrollLeftX = useRef(null);
  const preventClick = useRef(false);

  const [leftArrowDisable, setLeftArrowDisable] = useState(true);
  const [rightArrowDisable, setRightArrowDisable] = useState(false);

  const buttons = () => {
    const { offsetWidth, scrollWidth, scrollLeft } = navRef.current;

    const hideLeftScroll = scrollLeft <= 0;

    const hideRightScroll = scrollWidth - Math.round(scrollLeft) <= offsetWidth;

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

  const click = (e) => {
    if (preventClick.current) {
      e.preventDefault();
    }
  };

  const scroll = () => {
    buttons();
  };

  const mouseUp = () => {
    isDown.current = false;
  };

  const mouseDown = (e) => {
    e.preventDefault();

    isDown.current = true;

    startX.current = e.pageX - navRef.current.offsetLeft;
    scrollLeftX.current = navRef.current.scrollLeft;

    preventClick.current = false;

    buttons();
  };

  const mouseMove = (e) => {
    if (!isDown.current) return;

    e.preventDefault();

    const x = e.pageX - navRef.current.offsetLeft;

    const walk = x - startX.current;
    navRef.current.scrollLeft = scrollLeftX.current - walk;

    preventClick.current = true;

    buttons();
  };

  const mouseLeave = () => {
    isDown.current = false;
  };

  useEffect(() => {
    buttons();

    const elementRef = navRef.current;

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
  }, []);

  const handleHorizantalScroll = (element, speed, step) => {
    let scrollAmount = 0;

    const slideTimer = setInterval(() => {
      const e = element;

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
            onClick={() => handleHorizantalScroll(navRef.current, 15, -20)}
          >
            <i className='material-symbols-outlined'>chevron_left</i>
          </button>
        </div>
      )}
      <div className='scrollable' ref={navRef}>
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
            onClick={() => handleHorizantalScroll(navRef.current, 15, 20)}
          >
            <i className='material-symbols-outlined'>chevron_right</i>
          </button>
        </div>
      )}
    </div>
  );
});

MultipleSlider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MultipleSlider;
