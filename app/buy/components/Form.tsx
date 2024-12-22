'use client';

import { useState } from 'react';

// hooks
import useAlert from '@hooks/useAlert';

// components
import Input from '@components/Form/Input';
import Button from '@components/Button/Button';
import Loader from '@components/Loader/Loader';
import Heading from '@components/Heading/Heading';

// utils
import Request, { type IRequest, type IResponse } from '@utils/Request';

// interfaces
interface IFormProps {
  name: string;
  email: string;
  cardCvc: string;
  cardName: string;
  cardNumber: string;
  cardExpiration: string;
}

const Form: React.FC = () => {
  const { showAlert, hideAlert } = useAlert();

  const [loading, setLoading] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<IFormProps>({
    name: '',
    email: '',
    cardCvc: '',
    cardName: '',
    cardNumber: '',
    cardExpiration: '',
  });

  /**
   * Handles changes to form input fields.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The event object from the input change.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  /**
   * Handles form submission.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - The event object from the form submission.
   * @return {Promise<any>} - The result of the form submission.
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<any> => {
    e.preventDefault();

    hideAlert();

    setLoading(true);

    const parameters: IRequest = {
      url: 'v1/signin/password',
      method: 'POST',
      postData: {
        email: '',
        password: '',
      },
    };

    const req: IResponse = await Request.getResponse(parameters);

    const { status, data } = req;

    if (status === 200) {
      //
    } else {
      showAlert({ type: 'error', text: data.title ?? '' });
    }

    setLoading(false);
  };

  if (loading) {
    return <Loader type='inline' color='gray' text='Hang on a second' />;
  }

  return (
    <form
      className='form shrink'
      noValidate
      onSubmit={(e) => {
        void handleSubmit(e);
      }}
    >
      <div className='form-elements'>
        <div className='form-line padding-top'>
          <Heading type={5} color='gray' text='Buyer info' />
        </div>
        <div className='form-line'>
          <div className='flex flex-v-center flex-space-between'>
            <div className='two-line'>
              <div className='label-line'>
                <label htmlFor='name'>Name</label>
              </div>
              <Input
                type='text'
                name='name'
                value={formValues.name}
                maxLength={48}
                placeholder='Enter your name'
                required
                onChange={handleChange}
              />
            </div>
            <div className='two-line'>
              <div className='label-line'>
                <label htmlFor='email'>E-mail address</label>
              </div>
              <Input
                type='text'
                name='email'
                value={formValues.email}
                maxLength={64}
                placeholder='Enter your e-mail address'
                required
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className='form-line padding-top'>
          <Heading type={5} color='gray' text='Payment details' />
        </div>
        <div className='form-line'>
          <div className='flex flex-v-center flex-space-between'>
            <div className='two-line'>
              <div className='label-line'>
                <label htmlFor='cardName'>Name on card</label>
              </div>
              <Input
                type='text'
                name='cardName'
                value={formValues.cardName}
                maxLength={48}
                placeholder='Enter name on card'
                required
                onChange={handleChange}
              />
            </div>
            <div className='two-line'>
              <div className='label-line'>
                <label htmlFor='cardNumber'>Card number</label>
              </div>
              <Input
                type='text'
                name='cardNumber'
                value={formValues.cardNumber}
                maxLength={16}
                placeholder='Enter your card number'
                required
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className='form-line'>
          <div className='flex flex-v-center flex-space-between'>
            <div className='two-line'>
              <div className='label-line'>
                <label htmlFor='cardExpiration'>Expiration date</label>
              </div>
              <Input
                type='text'
                name='cardExpiration'
                value={formValues.cardExpiration}
                maxLength={4}
                placeholder="Enter your card's expiration date"
                required
                onChange={handleChange}
              />
            </div>
            <div className='two-line'>
              <div className='label-line'>
                <label htmlFor='cardCvc'>Security number</label>
              </div>
              <Input
                type='text'
                name='cardCvc'
                value={formValues.cardCvc}
                maxLength={3}
                placeholder="Enter your card's security number"
                required
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className='form-buttons'>
          <Button type='submit' color='blue-filled' text='Place payment & Issue tickets' />
        </div>
      </div>
    </form>
  );
};

export default Form;
