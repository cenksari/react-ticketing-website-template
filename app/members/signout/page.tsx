import { type Metadata } from 'next';

// components
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import ButtonLink from '@components/Button/ButtonLink';

const Page: React.FC = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={1} color='gray' text='Signed out' />
          <p className='gray form-information'>
            You are successfully signed out an you can safely return to home page.
          </p>

          <div className='button-container'>
            <ButtonLink color='gray-overlay' text='Return to home' url='' />
            &nbsp; &nbsp;
            <ButtonLink color='blue-filled' text='Sign in again' url='members/signin' />
          </div>
        </div>
      </div>
    </Section>
  </Master>
);

const title = 'Sign out';
const canonical = 'https://modern-ticketing.com/members/signout';
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
