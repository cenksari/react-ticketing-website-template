'use client';

import { useState, useEffect } from 'react';

// hooks
import useAlert from '@hooks/useAlert';

// components
import Button from '@components/Button/Button';
import Loader from '@components/Loader/Loader';

// interfaces
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

const TicketForm: React.FC<IProps> = ({ data }) => {
  const { showAlert, hideAlert } = useAlert();

  const [loading, setLoading] = useState<boolean>(true);
  const [formValues, setFormValues] = useState<IData[]>(data);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  /**
   * Orders the tickets in the array based on their ordering.
   *
   * @param {IData[]} array - The array of tickets to be ordered.
   * @return {IData[]} - The ordered array of tickets.
   */
  const orderTickets = (array: IData[]): IData[] => {
    return array.sort((a, b) => {
      return a.ordering - b.ordering;
    });
  };

  /**
   * Counts the total quantity of tickets in an array.
   *
   * @param {IData[]} array - The array of tickets to count.
   * @return {number} - The total quantity of tickets.
   */
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

  /**
   * Decreases the quantity of a specific ticket by one, or sets it to 0 if it's not a number or is already 0.
   *
   * @param {IData} ticket - The ticket to decrease the quantity of.
   */
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

  /**
   * Increases the quantity of a specific ticket by one, or sets it to 1 if it's not a number or is already 9.
   *
   * @param {IData} ticket - The ticket to increase the quantity of.
   */
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

  /**
   * Handles the form submission event.
   *
   * Prevents the default form submission behavior, hides any existing alert, counts the total quantity of tickets selected,
   * and redirects to the '/buy' page if there are tickets selected. If no tickets are selected, it displays an error alert.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - The event object from the form submission.
   * @return {Promise<any>} - A promise that resolves to any value.
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<any> => {
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
