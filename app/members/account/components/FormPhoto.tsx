'use client';

import React, { type FormEvent } from 'react';

import ProfilePhoto from '@components/Profile/ProfilePhoto';

interface IProps {
  data: string;
}

const FormPhoto = ({ data }: IProps): React.JSX.Element => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className='upload-picture'>
        <input type='file' name='image' id='image' className='input-file' accept='.jpg,.jpeg' />
        <label htmlFor='image'>
          <span className='material-symbols-outlined'>add_a_photo</span>
        </label>
        <ProfilePhoto image={data} size='large' />
        <span className='muted'>click profile picture to change</span>
      </div>
    </form>
  );
};

export default FormPhoto;
