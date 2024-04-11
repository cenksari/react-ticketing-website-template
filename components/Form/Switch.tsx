import React from 'react';

interface Props {
  name: string;
  color: string;
  checked?: boolean | false;
  children?: React.ReactNode | null;
}

const Switch = ({ name, color, checked, children }: Props): React.JSX.Element => (
  <div className='switch-container'>
    <label htmlFor={name} className={`switch ${color}`}>
      <input name={name} id={name} type='checkbox' defaultChecked={checked} />
      <span className='slider round' />
    </label>
    {children !== null && <span className='switch-description'>{children}</span>}
  </div>
);

export default Switch;
