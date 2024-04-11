'use client';

import React, { useState, type FormEvent } from 'react';

import Input from '@components/Form/Input';
import Button from '@components/Button/Button';
import ButtonLink from '@components/Button/ButtonLink';

const Form = (): React.JSX.Element => {
  const [formValues, setFormValues] = useState<any>({
    password: '',
    newPassword: '',
    newPasswordAgain: '',
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
  };

  return (
    <form method='POST' className='form shrink' noValidate onSubmit={handleSubmit}>
      <div className='form-elements'>
        <div className='form-line'>
          <div className='label-line'>
            <label htmlFor='password'>Current password</label>
          </div>
          <Input
            type='password'
            name='password'
            value={formValues.password}
            maxLength={64}
            placeholder='Enter your current password'
            required
            onChange={handleChange}
          />
        </div>
        <div className='form-line'>
          <div className='label-line'>
            <label htmlFor='newPassword'>New password</label>
          </div>
          <Input
            type='password'
            name='newPassword'
            value={formValues.newPassword}
            maxLength={64}
            placeholder='Enter your new password'
            required
            onChange={handleChange}
          />
        </div>
        <div className='form-line'>
          <div className='label-line'>
            <label htmlFor='newPasswordAgain'>Confirm new password</label>
          </div>
          <Input
            type='password'
            name='newPasswordAgain'
            value={formValues.newPasswordAgain}
            maxLength={64}
            placeholder='Re-enter your new password'
            required
            onChange={handleChange}
          />
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
