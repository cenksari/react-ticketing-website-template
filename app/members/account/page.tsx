import { type Metadata } from 'next';

// components
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import ButtonGroup from '@components/Button/ButtonGroup';
import ButtonGroupItem from '@components/Button/ButtonGroupItem';

import FormMain from './components/FormMain';
import FormPhoto from './components/FormPhoto';

const Page: React.FC = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={1} color='gray' text='My account' />
          <p className='gray form-information'>
            You can update your profile photo and your account details here.
          </p>
          <div className='button-container'>
            <ButtonGroup color='gray'>
              <ButtonGroupItem url='members/tickets' text='My tickets' />
              <ButtonGroupItem url='members/account' text='My account' active />
            </ButtonGroup>
          </div>
          <div className='padding-top'>
            <FormPhoto data='https://www.cenksari.com/content/profile.jpg' />
          </div>
        </div>
      </div>
    </Section>
    <Section className='white-background'>
      <div className='container'>
        <FormMain
          data={{
            name: 'Cenk',
            lastname: 'SARI',
            email: 'cenk@cenksari.com',
          }}
        />
      </div>
    </Section>
  </Master>
);

const title = 'My account';
const canonical = 'https://modern-ticketing.com/members/account';
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
