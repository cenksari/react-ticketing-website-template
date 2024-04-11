import React from 'react';

import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import ButtonGroup from '@components/Button/ButtonGroup';
import ProfilePhoto from '@components/Profile/ProfilePhoto';
import ButtonGroupItem from '@components/Button/ButtonGroupItem';

import Form from './components/Form';

const Page = (): React.JSX.Element => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={1} color='gray' text='My account' />
          <p className='gray'>
            Before you can sign in, you must activate your account with the code sent to your email
            address. If you do not see the email in a few minutes, check your junk mail or spam
            folder.
          </p>
          <div className='button-container'>
            <ButtonGroup color='gray'>
              <ButtonGroupItem url='members/tickets' text='My tickets' />
              <ButtonGroupItem url='members/account' text='My account' active />
            </ButtonGroup>
          </div>
          <div className='upload-picture'>
            <input type='file' name='image' id='image' className='input-file' accept='.jpg,.jpeg' />
            <label htmlFor='image'>
              <span className='material-symbols-outlined'>add_a_photo</span>
            </label>
            <ProfilePhoto image='https://www.cenksari.com/content/profile.jpg' size='large' />
            <span className='muted'>click profile picture to change</span>
          </div>
        </div>
        <Form />
      </div>
    </Section>
  </Master>
);

const title = 'My account';
const canonical = 'https://modern-ticketing.com/members/account';
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
