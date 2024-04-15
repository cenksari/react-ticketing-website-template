'use client';

import React, { type FormEvent } from 'react';

import Input from '@components/Form/Input';
import Button from '@components/Button/Button';

interface IFormProps {
  email: string;
}

const Form = (): React.JSX.Element => {
  const [formValues, setFormValues] = React.useState<IFormProps>({
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
  };

  return (
    <form className='form shrink' noValidate onSubmit={handleSubmit}>
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
              placeholder='Enter your e-mail address'
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='form-buttons'>
          <Button type='submit' color='blue-filled' text='Reset password' />
        </div>
      </div>
    </form>
  );
};

export default Form;
