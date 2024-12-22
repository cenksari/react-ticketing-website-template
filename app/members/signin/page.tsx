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
          <Heading type={1} color='gray' text='Sign in' />
          <p className='gray form-information'>
            Please enter your e-mail address and password to sign in. Don&apos;t have an account?{' '}
            <Link href='/members/signup' className='blue'>
              Sign up here
            </Link>
          </p>
        </div>
        <Form />
      </div>
    </Section>
  </Master>
);

const title = 'Sign in';
const canonical = 'https://modern-ticketing.com/members/signin';
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
