'use client';

import React, { type FormEvent } from 'react';

import Input from '@components/Form/Input';
import Button from '@components/Button/Button';

const Form = (): React.JSX.Element => {
  const [formValues, setFormValues] = React.useState<any>({
    code: '',
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
          <div className='label-line flex flex-v-center flex-space-between'>
            <label htmlFor='code'>Activation code</label>
          </div>
          <Input
            type='text'
            name='code'
            value={formValues.code}
            maxLength={10}
            placeholder='Enter your activation code'
            required
            onChange={handleChange}
          />
        </div>
        <div className='form-buttons'>
          <Button type='submit' color='blue-filled' text='Activate e-mail' />
        </div>
      </div>
    </form>
  );
};

export default Form;
