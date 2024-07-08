import React from 'react';

import Link from 'next/link';
import { type Metadata } from 'next';

import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import ButtonGroup from '@components/Button/ButtonGroup';
import ButtonGroupItem from '@components/Button/ButtonGroupItem';

const Page = (): React.JSX.Element => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={1} color='gray' text='我的门票' />
          <p className='gray form-information'>
            您可以在任何时候访问您从本页购买的机票。您可以下载或发送您的票。
            请注意: 您将无法在本页看到已经结束或取消的活动的门票。
          </p>
          <div className='button-container'>
            <ButtonGroup color='gray'>
              <ButtonGroupItem url='members/tickets' text='我的门票' active />
              <ButtonGroupItem url='members/account' text='我的账户' />
            </ButtonGroup>
          </div>
        </div>
      </div>
    </Section>
    <Section className='white-background'>
      <div className='container'>
        <div className='ticket-item'>
          <div className='item-right'>
            <h2>TBD</h2>
            <p>TBD</p>
            <span className='material-symbols-outlined'>qr_code_2</span>
            <strong>21EX9P</strong>
            <span className='up-border'></span>
            <span className='down-border'></span>
          </div>
          <div className='item-left'>
            <h5>谷艺凌香港演唱会-VIP门票</h5>
            <p>
              <span className='material-symbols-outlined'>event</span>
              Tue, Sep 21, 2024 19:00
            </p>
            <p>
              <span className='material-symbols-outlined'>apartment</span>
              Hong Kong TBD
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
            <h5>Lisa Crazy Hourse Show</h5>
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

const title = '我的门票';
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
