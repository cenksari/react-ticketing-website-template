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
          <Heading type={1} color='gray' text='Buy tickets' />
          <p className='gray'>
            Please enter your personal &amp; payment details. We will issue and send your tickets
            your e-mail address immediately.
          </p>
        </div>
        <div className='padding-top center'>
          <div className='padding-top'>
            <Heading type={5} color='gray' text='Details' />
            <p>
              <strong>Event</strong> Event name goes here
            </p>
            <p>
              <strong>Venue</strong> Royal Albert Hall
            </p>
            <p>
              <strong>Date</strong> Tue, Sep 21, 2024 19:00
            </p>
          </div>
        </div>
        <div className='form shrink'>
          <table className='table'>
            <thead>
              <tr>
                <th className='left'>Name</th>
                <th className='center'>Qty.</th>
                <th className='right'>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='left'>Child</td>
                <td className='center'>2</td>
                <td className='right'>£23</td>
              </tr>
              <tr>
                <td className='left'>Adult</td>
                <td className='center'>2</td>
                <td className='right'>£23</td>
              </tr>
              <tr>
                <td className='right' colSpan={3}>
                  <strong>Total : </strong> £23
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Form />
        <div className='paragraph-container center'>
          <p>
            By clicking place payment button I agree to the&nbsp;
            <Link href='/legal/terms-of-service' className='blue'>
              Terms of service
            </Link>
          </p>
        </div>
      </div>
    </Section>
  </Master>
);

const title = 'Buy tickets';
const canonical = 'https://modern-ticketing.com/buy';
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
