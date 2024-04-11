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
          <Heading type={1} color='gray' text='E-mail activation' />
          <p className='gray'>
            You must activate your new email address with the code sent to your email address. If
            you do not see the email in a few minutes, check your junk mail or spam folder.
          </p>
        </div>
        <form className='form shrink' noValidate>
          <div className='form-elements'>
            <div className='form-line'>
              <div className='label-line flex flex-v-center flex-space-between'>
                <label htmlFor='code'>Activation code</label>
              </div>
              <Input
                type='text'
                name='code'
                value=''
                maxLength={10}
                placeholder='Enter your activation code'
                required
              />
            </div>
            <div className='form-buttons'>
              <Button type='submit' color='blue-filled' text='Activate e-mail' />
            </div>
          </div>
        </form>
      </div>
    </Section>
  </Master>
);

const title = 'E-mail activation';
const canonical = 'https://modern-ticketing.com/members/activate/email';
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
