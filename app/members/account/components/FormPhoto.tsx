'use client';

import React from 'react';

import ProfilePhoto from '@components/Profile/ProfilePhoto';

const FormPhoto = (): React.JSX.Element => (
  <div className='upload-picture'>
    <input type='file' name='image' id='image' className='input-file' accept='.jpg,.jpeg' />
    <label htmlFor='image'>
      <span className='material-symbols-outlined'>add_a_photo</span>
    </label>
    <ProfilePhoto image='https://www.cenksari.com/content/profile.jpg' size='large' />
    <span className='muted'>click profile picture to change</span>
  </div>
);

export default FormPhoto;
