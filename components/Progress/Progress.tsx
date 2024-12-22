'use client';

import { useState, useEffect } from 'react';

// interfaces
interface IProps {
  ms: number;
}

const Progress: React.FC<IProps> = ({ ms }) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 50 / (ms / 100);

        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 50);

    setTimeout(() => {
      clearInterval(interval);
    }, ms);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='progress'>
      <div className='bar' style={{ width: `${progress}%` }} />
    </div>
  );
};

export default Progress;
