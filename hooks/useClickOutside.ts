import { MutableRefObject, useEffect } from 'react';

const useClickOutside = (ref: MutableRefObject<HTMLDivElement>, onClickOutside: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    };

    document.addEventListener('mouseup', handleClickOutside);

    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, [ref, onClickOutside]);
};

export default useClickOutside;
