'use client';

import React, { type FormEvent } from 'react';

import Input from '@components/Form/Input';
import Button from '@components/Button/Button';
import Loader from '@components/Loader/Loader';
import ButtonLink from '@components/Button/ButtonLink';

import useAlert from '@hooks/useAlert';

import Request, { type IRequest, type IResponse } from '@utils/Request';

interface IFormProps {
  password: string;
  newPassword: string;
  newPasswordAgain: string;
}

const Form = (): React.JSX.Element => {
  const { showAlert, hideAlert } = useAlert();

  const [loading, setLoading] = React.useState<boolean>(false);
  const [formValues, setFormValues] = React.useState<IFormProps>({
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<any> => {
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
