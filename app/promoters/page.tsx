import { type Metadata } from 'next';

// components
import Box from '@components/Box/Box';
import Master from '@components/Layout/Master';
import Slider from '@components/Slider/Slider';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import ButtonLink from '@components/Button/ButtonLink';

const Page: React.FC = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div className='padding-bottom center'>
          <Heading type={1} color='gray' text='Promoters' />
          <p className='gray form-information'>
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
          <Heading type={5} color='gray' text='Manage everything with a single application' />
          <p className='gray form-information'>
            With our specially designed Promoter application, you can track ticket sales in
            real-time and admit customers at the door with your barcode scanner. Plus, it&apos;s
            free!
          </p>
          <div className='button-container'>
            <ButtonLink
              text='Get started'
              color='gray-filled'
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
          <Heading type={5} color='gray' text='Sustainable ticketing' />
          <p className='gray form-information'>
            Stunning, white-labelled pages to promote your event. To get started selling tickets
            online with Modern ticketing, you&apos;ll first create a beautiful event website to
            promote your event.
          </p>
          <div className='button-container'>
            <ButtonLink
              text='Get started'
              color='gray-filled'
              rightIcon='arrow_forward'
              url='contact'
            />
          </div>
        </div>
      </div>
    </Section>

    <Section>
      <div className='container'>
        <div className='center'>
          <Heading type={5} color='gray' text='How it works?' />
          <p className='gray'>100% Modern Ticketing backed guarantee.</p>
        </div>
      </div>

      <div className='carousel padding-top'>
        <Slider>
          <Box className='gray'>
            <span className='material-symbols-outlined gray'>today</span>
            <p>Break down silos between marketing, design, and development</p>
          </Box>
          <Box className='gray'>
            <span className='material-symbols-outlined gray'>stacked_bar_chart</span>
            <p>Backed by enterprise-grade security</p>
          </Box>
          <Box className='gray'>
            <span className='material-symbols-outlined gray'>area_chart</span>
            <p>We’ll partner with you to ensure success</p>
          </Box>
          <Box className='gray'>
            <span className='material-symbols-outlined gray'>table_chart_view</span>
            <p>World-class performance</p>
          </Box>
          <Box className='gray'>
            <span className='material-symbols-outlined gray'>database</span>
            <p>Harness the power of code without writing it</p>
          </Box>
          <Box className='gray'>
            <span className='material-symbols-outlined gray'>pie_chart</span>
            <p>You have a team dedicated to serving your customers individually</p>
          </Box>
        </Slider>
      </div>

      <div className='button-container center'>
        <ButtonLink
          text='Get started'
          color='gray-filled'
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
