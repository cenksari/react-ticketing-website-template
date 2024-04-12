import React from 'react';

import { type Metadata } from 'next';

import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';

const Page = (): React.JSX.Element => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={1} color='gray' text='Contact us' />
        </div>
      </div>
    </Section>
  </Master>
);

const title = 'Contact us';
const mainUrl = 'https://www.modern-ticketing.com';
const canonical = `${mainUrl}/contact`;
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
    images: `${mainUrl}/logo192.png`,
  },
};

export default Page;
