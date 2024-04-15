'use client';

import React, { type FormEvent } from 'react';

import Button from '@components/Button/Button';

interface IData {
  id: number;
  name: string;
  price: string;
  information?: string;
}

interface IProps {
  data?: IData[];
}

const TicketForm = ({ data }: IProps): React.JSX.Element => {
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
        {data?.map((ticket) => (
          <div key={ticket.id} className='ticket-box-line'>
            <div className='quantity'>
              <button type='button'>-</button>
              <input type='text' name={`t-${ticket.id}`} defaultValue='1' />
              <button type='button'>+</button>
            </div>
            <span>{ticket.name}</span>
            <strong>{ticket.price}</strong>
            {ticket.information != null && (
              <span className='material-symbols-outlined icon' title={ticket.information}>
                info
              </span>
            )}
          </div>
        ))}
      </div>
      <div className='ticket-box-buttons'>
        <Button type='submit' color='blue-filled' text='Buy tickets' rightIcon='arrow_forward' />
      </div>
    </form>
  );
};

export default TicketForm;
