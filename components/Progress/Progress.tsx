'use client';

import React from 'react';

interface IProps {
  ms: number;
}

const Progress = ({ ms }: IProps): React.JSX.Element => {
  const [progress, setProgress] = React.useState<number>(0);

  React.useEffect(() => {
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
  }, []);

  return (
    <div className='progress'>
      <div className='bar' style={{ width: `${progress}%` }} />
    </div>
  );
};

export default Progress;
