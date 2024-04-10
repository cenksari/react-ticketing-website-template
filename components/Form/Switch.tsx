/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

type Props = {
  name: string;
  color: string;
  checked?: boolean;
  children?: React.ReactNode;
};

const Switch = ({ name, color, checked, children }: Props) => (
  <div className='switch-container'>
    <label htmlFor={name} className={`switch ${color}`}>
      <input name={name} id={name} type='checkbox' defaultChecked={checked} />
      <span className='slider round' />
    </label>
    {children && <span className='switch-description'>{children}</span>}
  </div>
);

export default Switch;
