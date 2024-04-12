'use client';

import React from 'react';

import { AlertContext } from '@contexts/alertContext';

const Alert = (): React.JSX.Element => {
  const { alert, hideAlert } = React.useContext(AlertContext);

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
