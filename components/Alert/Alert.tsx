import React from 'react';

interface Props {
  type: string;
  text: string;
  show?: boolean | false;
  onCloseFunction: () => any;
}

const Alert = ({ type, text, show, onCloseFunction }: Props): React.JSX.Element => {
  if (show === true) {
    return (
      <div className={`alert ${type}`}>
        <div className='container'>
          <p>{text}</p>
          <button type='button' onClick={onCloseFunction}>
            <span className='material-symbols-outlined'>close</span>
          </button>
        </div>
      </div>
    );
  }

  return <></>;
};

export default Alert;
