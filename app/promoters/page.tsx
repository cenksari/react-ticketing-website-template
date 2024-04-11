import React from 'react';

import Box from '@components/Box/Box';
import Master from '@components/Layout/Master';
import Slider from '@components/Slider/Slider';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import ButtonLink from '@components/Button/ButtonLink';

const Page = (): React.JSX.Element => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={1} color='gray' text='Promoters' />
          <p className='gray'>
            Whether you&apos;re selling one ticket or a hundred thousand, the Modern ticketing
            infrastructure is designed to meet all your needs. Plus, there are no additional fees or
            surprises added later!
          </p>
        </div>
      </div>
    </Section>

    <Section>
      <div className='container'>
        <div className='center'>
          <Heading type={2} color='red' text='Manage everything with a single application' />
          <p className='gray'>
            With our specially designed Promoter application, you can track ticket sales in
            real-time and admit customers at the door with your barcode scanner. Plus, it&apos;s
            free!
          </p>
          <div className='button-container'>
            <ButtonLink
              text='Get started'
              color='red-filled'
              rightIcon='arrow_forward'
              url='contact'
            />
          </div>
        </div>
      </div>
    </Section>

    <Section className='white-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={2} color='purple' text='Sustainable ticketing' />
          <p className='gray'>
            Stunning, white-labelled pages to promote your event. To get started selling tickets
            online with Modern ticketing, you&apos;ll first create a beautiful event website to
            promote your event.
          </p>
          <div className='button-container'>
            <ButtonLink
              text='Get started'
              color='purple-filled'
              rightIcon='arrow_forward'
              url='contact'
            />
          </div>
        </div>
      </div>
    </Section>

    <Section>
      <div className='container'>
        <div className='center padding-bottom'>
          <Heading type={2} color='yellow' text='How it works?' />
          <Heading type={5} color='gray' text='100% Modern Ticketing backed guarantee.' />
        </div>
      </div>

      <div className='carousel'>
        <Slider>
          <Box className='gray'>
            <span className='material-symbols-outlined blue'>arrow_forward</span>
            <p>You have a team dedicated to serving your customers individually</p>
          </Box>
          <Box className='gray'>
            <span className='material-symbols-outlined red'>arrow_forward</span>
            <p>You have a team dedicated to serving your customers individually</p>
          </Box>
          <Box className='gray'>
            <span className='material-symbols-outlined purple'>arrow_forward</span>
            <p>You have a team dedicated to serving your customers individually</p>
          </Box>
          <Box className='gray'>
            <span className='material-symbols-outlined green'>arrow_forward</span>
            <p>You have a team dedicated to serving your customers individually</p>
          </Box>
          <Box className='gray'>
            <span className='material-symbols-outlined yellow'>arrow_forward</span>
            <p>You have a team dedicated to serving your customers individually</p>
          </Box>
        </Slider>
      </div>

      <div className='button-container center'>
        <ButtonLink
          text='Get started'
          color='yellow-filled'
          rightIcon='arrow_forward'
          url='contact'
        />
      </div>
    </Section>
  </Master>
);

const title = 'Promoters';
const canonical = 'https://modern-ticketing.com/promoters';
const description = 'Modern ticketing is a modern ticketing solution';

export const metadata = {
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
