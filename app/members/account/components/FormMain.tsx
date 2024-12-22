'use client';

import { useState } from 'react';

import Link from 'next/link';

// hooks
import useAlert from '@hooks/useAlert';

// components
import Input from '@components/Form/Input';
import Button from '@components/Button/Button';
import Loader from '@components/Loader/Loader';
import ButtonLink from '@components/Button/ButtonLink';

// utils
import Request, { type IRequest, type IResponse } from '@utils/Request';

// interfaces
interface IProps {
  data: {
    name: string;
    email: string;
    lastname: string;
  };
}

interface IFormProps {
  name: string;
  email: string;
  lastname: string;
}

const FormMain: React.FC<IProps> = ({ data }) => {
  const { showAlert, hideAlert } = useAlert();

  const [loading, setLoading] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<IFormProps>({
    name: data.name,
    email: data.email,
    lastname: data.lastname,
  });

  /**
   * Handles the change event for input fields in the form.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  /**
   * Handles the form submission event.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
   * @returns {Promise<any>}
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
        <div className='form-line'>
          <div className='one-line'>
            <div className='label-line'>
              <label htmlFor='name'>Name</label>
            </div>
            <Input
              type='text'
              name='name'
              value={formValues.name}
              maxLength={64}
              placeholder='Enter your name'
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='form-line'>
          <div className='one-line'>
            <div className='label-line'>
              <label htmlFor='lastname'>Last name</label>
            </div>
            <Input
              type='text'
              name='lastname'
              value={formValues.lastname}
              maxLength={64}
              placeholder='Enter your last name'
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='form-line'>
          <div className='one-line'>
            <div className='label-line flex flex-v-center flex-space-between'>
              <label htmlFor='email'>E-mail address</label>
              <Link href='/members/email' className='blue'>
                Change e-mail
              </Link>
            </div>
            <Input
              type='email'
              name='email'
              value={formValues.email}
              maxLength={128}
              placeholder='Enter your e-mail address'
              required
              disabled
              onChange={() => {}}
            />
          </div>
        </div>
        <div className='form-line'>
          <div className='label-line flex flex-v-center flex-space-between'>
            <label htmlFor='password'>Password</label>
            <Link href='/members/password' className='blue'>
              Change password
            </Link>
          </div>
          <Input
            type='password'
            name='password'
            value='dummypassword'
            maxLength={64}
            placeholder='Enter your password'
            required
            disabled
          />
        </div>
        <div className='form-buttons'>
          <ButtonLink color='gray-overlay' text='Sign out' url='members/signout' />
          &nbsp; &nbsp;
          <Button type='submit' color='blue-filled' text='Update profile' />
        </div>
      </div>
    </form>
  );
};

export default FormMain;
