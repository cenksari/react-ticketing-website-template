'use client';

import React, { type FormEvent } from 'react';

import Input from '@components/Form/Input';
import Button from '@components/Button/Button';

interface IFormProps {
  newPassword: string;
  newPasswordAgain: string;
}

const Form = (): React.JSX.Element => {
  const [formValues, setFormValues] = React.useState<IFormProps>({
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
    <form className='form shrink' noValidate onSubmit={handleSubmit}>
      <div className='form-elements'>
        <div className='form-line'>
          <div className='label-line flex flex-v-center flex-space-between'>
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
          <div className='label-line flex flex-v-center flex-space-between'>
            <label htmlFor='newPasswordAgain'>Confirm password</label>
          </div>
          <Input
            type='password'
            name='newPasswordAgain'
            value={formValues.newPasswordAgain}
            maxLength={64}
            placeholder='Re-enter your password'
            required
            onChange={handleChange}
          />
        </div>
        <div className='form-buttons'>
          <Button type='submit' color='blue-filled' text='Reset password & sign in' />
        </div>
      </div>
    </form>
  );
};

export default Form;
