'use client';

import React, { useState, type FormEvent } from 'react';

import Input from '@components/Form/Input';
import Button from '@components/Button/Button';
import ButtonLink from '@components/Button/ButtonLink';

const Form = (): React.JSX.Element => {
  const [formValues, setFormValues] = useState<any>({
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    window.location.href = '/members/activate/email';
  };

  return (
    <form method='POST' className='form shrink' noValidate onSubmit={handleSubmit}>
      <div className='form-elements'>
        <div className='form-line'>
          <div className='one-line'>
            <div className='label-line'>
              <label htmlFor='email'>E-mail address</label>
            </div>
            <Input
              type='email'
              name='email'
              value={formValues.email}
              maxLength={128}
              placeholder='Enter your new e-mail address'
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='form-line'>
          <div className='one-line'>
            <div className='label-line'>
              <label htmlFor='emailAgain'>Confirm e-mail address</label>
            </div>
            <Input
              type='email'
              name='emailAgain'
              value=''
              maxLength={128}
              placeholder='Re-enter your new e-mail address'
              required
            />
          </div>
        </div>
        <div className='form-buttons'>
          <ButtonLink color='gray-overlay' text='Go back' url='members/profile' />
          &nbsp; &nbsp;
          <Button type='submit' color='blue-filled' text='Submit' />
        </div>
      </div>
    </form>
  );
};

export default Form;
