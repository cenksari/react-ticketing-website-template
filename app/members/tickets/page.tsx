import Link from 'next/link';

import { type Metadata } from 'next';

// components
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import ButtonGroup from '@components/Button/ButtonGroup';
import ButtonGroupItem from '@components/Button/ButtonGroupItem';

const Page: React.FC = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={1} color='gray' text='My tickets' />
          <p className='gray form-information'>
            You can access the tickets you purchased from this page at any time. You can download or
            send your tickets. Please note: You will not be able to see tickets for events that have
            already ended or been canceled on this page.
          </p>
          <div className='button-container'>
            <ButtonGroup color='gray'>
              <ButtonGroupItem url='members/tickets' text='My tickets' active />
              <ButtonGroupItem url='members/account' text='My account' />
            </ButtonGroup>
          </div>
        </div>
      </div>
    </Section>
    <Section className='white-background'>
      <div className='container'>
        <div className='ticket-item'>
          <div className='item-right'>
            <h2>21</h2>
            <p>September</p>
            <span className='material-symbols-outlined'>qr_code_2</span>
            <strong>21EX9P</strong>
            <span className='up-border'></span>
            <span className='down-border'></span>
          </div>
          <div className='item-left'>
            <h5>Event name goes here</h5>
            <p>
              <span className='material-symbols-outlined'>event</span>
              Tue, Sep 21, 2024 19:00
            </p>
            <p>
              <span className='material-symbols-outlined'>apartment</span>
              Royal Albert Hall
            </p>
            <div className='actions'>
              <Link href='/members/tickets' title='Download tickets'>
                <span className='material-symbols-outlined'>download</span>
              </Link>
              <Link href='/members/tickets' title='Send tickets'>
                <span className='material-symbols-outlined'>forward_to_inbox</span>
              </Link>
            </div>
          </div>
        </div>

        <div className='ticket-item'>
          <div className='item-right'>
            <h2>21</h2>
            <p>September</p>
            <span className='material-symbols-outlined'>qr_code_2</span>
            <strong>21EX9P</strong>
            <span className='up-border'></span>
            <span className='down-border'></span>
          </div>
          <div className='item-left'>
            <h5>Event name goes here</h5>
            <p>
              <span className='material-symbols-outlined'>event</span>
              Tue, Sep 21, 2024 19:00
            </p>
            <p>
              <span className='material-symbols-outlined'>apartment</span>
              Royal Albert Hall
            </p>
            <div className='actions'>
              <Link href='/members/tickets' title='Download tickets'>
                <span className='material-symbols-outlined'>download</span>
              </Link>
              <Link href='/members/tickets' title='Send tickets'>
                <span className='material-symbols-outlined'>forward_to_inbox</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </Master>
);

const title = 'My tickets';
const canonical = 'https://modern-ticketing.com/members/tickets';
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
