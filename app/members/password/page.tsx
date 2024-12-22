import { type Metadata } from 'next';

// components
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';

import Form from './components/Form';

const Page: React.FC = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={1} color='gray' text='Change password' />
          <p className='gray form-information'>
            Please enter your new password. It&apos;s a good idea to use a strong password that you
            are not using elsewhere. Your new password must be at least 8 characters.
          </p>
        </div>
        <Form />
      </div>
    </Section>
  </Master>
);

const title = 'Change password';
const canonical = 'https://modern-ticketing.com/members/password';
const description = 'Modern ticketing is a modern ticketing solution';

export const metadata: Metadata = {
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
