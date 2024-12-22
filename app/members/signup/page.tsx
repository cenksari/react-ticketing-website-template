import Link from 'next/link';

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
          <Heading type={1} color='gray' text='Sign up' />
          <p className='gray form-information'>
            Create an account to customize your experience for your ticketing journey.{' '}
            <Link href='/members/signin' className='blue'>
              Click here
            </Link>{' '}
            to sign in if you already have an account.
          </p>
        </div>
        <Form />
      </div>
    </Section>
  </Master>
);

const title = 'Sign up';
const canonical = 'https://modern-ticketing.com/members/signup';
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
