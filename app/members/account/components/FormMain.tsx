'use client';

import React, { type FormEvent } from 'react';

import Link from 'next/link';

import Input from '@components/Form/Input';
import Button from '@components/Button/Button';

interface IProps {
  data: any;
}

const FormMain = ({ data }: IProps): React.JSX.Element => {
  const [formValues, setFormValues] = React.useState<any>({
    name: data.name,
    lastname: data.lastname,
    email: data.email,
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
          <Button type='submit' color='blue-filled' text='Update profile' />
        </div>
      </div>
    </form>
  );
};

export default FormMain;
