'use client';

import React, { type FormEvent } from 'react';

import Button from '@components/Button/Button';

const TicketForm = (): React.JSX.Element => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<any> => {
    e.preventDefault();

    document.location = '/buy';
  };

  return (
    <form
      noValidate
      onSubmit={(e) => {
        void handleSubmit(e);
      }}
    >
      <div className='ticket-box-content'>
        <div className='ticket-box-line'>
          <div className='quantity'>
            <button type='button'>-</button>
            <input type='text' name='q1' defaultValue='1' />
            <button type='button'>+</button>
          </div>
          <span>Family</span>
          <strong>£20</strong>
        </div>
        <div className='ticket-box-line'>
          <div className='quantity'>
            <button type='button'>-</button>
            <input type='text' name='q2' defaultValue='1' />
            <button type='button'>+</button>
          </div>
          <span>Adult</span>
          <strong>£20</strong>
        </div>
        <div className='ticket-box-line'>
          <div className='quantity'>
            <button type='button'>-</button>
            <input type='text' name='q3' defaultValue='1' />
            <button type='button'>+</button>
          </div>
          <span>Child</span>
          <strong>£20</strong>
          <span className='material-symbols-outlined icon' title='Information about child tickets'>
            info
          </span>
        </div>
      </div>
      <div className='ticket-box-buttons'>
        <Button type='submit' color='blue-filled' text='Buy tickets' rightIcon='arrow_forward' />
      </div>
    </form>
  );
};

export default TicketForm;
