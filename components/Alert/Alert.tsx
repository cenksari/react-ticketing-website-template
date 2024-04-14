'use client';

import React from 'react';

import useAlert from '@hooks/useAlert';

const Alert = (): React.JSX.Element => {
  const { alert, hideAlert } = useAlert();

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
