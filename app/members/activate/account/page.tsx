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
          <Heading type={1} color='gray' text='Account activation' />
          <p className='gray form-information'>
            Before you can sign in, you must activate your account with the code sent to your email
            address. If you do not see the email in a few minutes, check your junk mail or spam
            folder. You can do this later with your e-mail link.
          </p>
        </div>
        <Form />
      </div>
    </Section>
  </Master>
);

const title = 'Account activation';
const canonical = 'https://modern-ticketing.com/members/activate/account';
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
