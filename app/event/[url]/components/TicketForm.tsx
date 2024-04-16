'use client';

import React, { type FormEvent } from 'react';

import Button from '@components/Button/Button';
import Loader from '@components/Loader/Loader';

import useAlert from '@hooks/useAlert';

interface IData {
  id: number;
  name: string;
  price: string;
  ordering: number;
  soldout?: boolean;
  quantity?: number;
  information?: string;
}

interface IProps {
  data: IData[];
}

const TicketForm = ({ data }: IProps): React.JSX.Element => {
  const { showAlert, hideAlert } = useAlert();

  const [loading, setLoading] = React.useState<boolean>(true);
  const [formValues, setFormValues] = React.useState<IData[]>(data);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const orderTickets = (array: IData[]): IData[] => {
    return array.sort((a, b) => {
      return a.ordering - b.ordering;
    });
  };

  const countTickets = (array: IData[]): number => {
    return array.reduce((sum, curr): number => {
      let q: number = 0;

      if (curr.quantity != null && !isNaN(curr.quantity)) {
        q = sum + curr.quantity;
      } else {
        q = sum;
      }

      return q;
    }, 0);
  };

  const handleDecrease = (ticket: IData): void => {
    const tickets: IData[] = formValues.filter((e: IData) => e.id !== ticket.id);

    let newTicket: IData;

    if (ticket?.quantity == null || isNaN(ticket.quantity)) {
      newTicket = { ...ticket, quantity: 0 };
    } else {
      if (ticket.quantity > 0) {
        const newQuantity: number = (ticket.quantity -= 1);

        newTicket = { ...ticket, quantity: newQuantity };
      } else {
        newTicket = { ...ticket, quantity: 0 };
      }
    }

    tickets.push(newTicket);

    setFormValues(orderTickets(tickets));
  };

  const handleIncrease = (ticket: IData): void => {
    const tickets: IData[] = formValues.filter((e: IData) => e.id !== ticket.id);

    let newTicket: IData;

    if (ticket?.quantity == null || isNaN(ticket.quantity)) {
      newTicket = { ...ticket, quantity: 1 };
    } else {
      if (ticket.quantity < 9) {
        const newQuantity: number = (ticket.quantity += 1);

        newTicket = { ...ticket, quantity: newQuantity };
      } else {
        newTicket = { ...ticket, quantity: 9 };
      }
    }

    tickets.push(newTicket);

    setFormValues(orderTickets(tickets));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<any> => {
    e.preventDefault();

    hideAlert();

    const quantity: number = countTickets(formValues);

    if (quantity > 0) {
      setLoading(true);

      window.location.href = '/buy';
    } else {
      showAlert({ type: 'error', text: 'You must select at least one ticket for this event.' });
    }
  };

  if (loading) {
    return <Loader type='inline' color='gray' text='Hang on a second' />;
  }

  return (
    <form
      noValidate
      onSubmit={(e) => {
        void handleSubmit(e);
      }}
    >
      <div className='ticket-box-content'>
        {formValues?.map((ticket) => (
          <div key={ticket.id} className='ticket-box-line'>
            {ticket.soldout === true ? (
              <>
                <span className='material-symbols-outlined'>lock</span>
                <span>{ticket.name}</span>
                <strong>Sold out</strong>
                {ticket.information != null && (
                  <span className='material-symbols-outlined icon' title={ticket.information}>
                    info
                  </span>
                )}
              </>
            ) : (
              <>
                <div className='quantity'>
                  <button
                    type='button'
                    onClick={() => {
                      handleDecrease(ticket);
                    }}
                  >
                    -
                  </button>
                  <input
                    readOnly
                    type='text'
                    name={`t-${ticket.id}`}
                    value={ticket.quantity ?? 0}
                    onChange={() => {}}
                  />
                  <button
                    type='button'
                    onClick={() => {
                      handleIncrease(ticket);
                    }}
                  >
                    +
                  </button>
                </div>
                <span>{ticket.name}</span>
                <strong>{ticket.price}</strong>
                {ticket.information != null && (
                  <span className='material-symbols-outlined icon' title={ticket.information}>
                    info
                  </span>
                )}
              </>
            )}
          </div>
        ))}
      </div>
      <div className='ticket-box-buttons'>
        {formValues.length > 0 ? (
          <Button type='submit' color='blue-filled' text='Buy tickets' rightIcon='arrow_forward' />
        ) : (
          <Button type='submit' color='disabled' text='Tickets not found' />
        )}
      </div>
    </form>
  );
};

export default TicketForm;
