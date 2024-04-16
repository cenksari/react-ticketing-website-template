'use client';

import React from 'react';

import useAlert from '@hooks/useAlert';

const Alert = (): React.JSX.Element => {
  const { alert, hideAlert } = useAlert();

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      hideAlert();
    }, 7000);

    return () => {
      clearTimeout(timeout);
    };
  }, [hideAlert]);

  if (alert.show === true) {
    return (
      <div className={`alert ${alert.type}`}>
        <div className='container'>
          <p>{alert.text}</p>
          <button type='button' onClick={hideAlert}>
            <span className='material-symbols-outlined'>close</span>
          </button>
        </div>
      </div>
    );
  }

  return <></>;
};

export default Alert;
