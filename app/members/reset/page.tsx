import React from 'react';

import Input from '@components/Form/Input';
import Master from '@components/Layout/Master';
import Button from '@components/Button/Button';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';

const Page = (): React.JSX.Element => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={1} color='gray' text='Reset password' />
          <p className='gray'>
            Please enter your new password. We will change your password immediately.
          </p>
        </div>
        <form className='form shrink' noValidate>
          <div className='form-elements'>
            <div className='form-line'>
              <div className='label-line flex flex-v-center flex-space-between'>
                <label htmlFor='newPassword'>New password</label>
              </div>
              <Input
                type='password'
                name='newPassword'
                value=''
                maxLength={64}
                placeholder='Enter your new password'
                required
              />
            </div>
            <div className='form-line'>
              <div className='label-line flex flex-v-center flex-space-between'>
                <label htmlFor='newPasswordAgain'>Confirm password</label>
              </div>
              <Input
                type='password'
                name='newPasswordAgain'
                value=''
                maxLength={64}
                placeholder='Re-enter your password'
                required
              />
            </div>
            <div className='form-buttons'>
              <Button type='submit' color='blue-filled' text='Reset password & sign in' />
            </div>
          </div>
        </form>
      </div>
    </Section>
  </Master>
);

const title = 'Reset password';
const canonical = 'https://modern-ticketing.com/members/reset';
const description = 'Modern ticketing is a modern ticketing solution';

export const metadata = {
  title,
  description,
  keywords: 'modern ticketing',
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    type: 'website',
    siteName: 'Modern Ticketing',
    images: 'https://modern-ticketing.com/logo192.png',
  },
};

export default Page;
