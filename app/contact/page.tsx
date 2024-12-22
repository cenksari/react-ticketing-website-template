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
        <div className='padding-bottom center'>
          <Heading type={1} color='gray' text='Contact us' />
          <p className='gray form-information'>
            Please feel free to contact us through the following communication channels for any
            questions, concerns, or suggestions you may have.
          </p>
        </div>
      </div>
    </Section>
    <Section className='gray-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={5} color='gray' text='Customer service' />
          <p className='gray form-information'>
            Our customer service is available Monday through Friday from <strong>9:00 AM</strong> to{' '}
            <strong>6:00 PM</strong>, and on weekends from <strong>10:00 AM</strong> to{' '}
            <strong>6:00 PM</strong>. Please click the button below for live assistance.
          </p>
          <div className='button-container'>
            <ButtonLink
              color='gray-overlay'
              text='Live assistance'
              rightIcon='arrow_forward'
              url=''
            />
            &nbsp; &nbsp;
            <ButtonLink
              color='gray-filled'
              text='Drop us an e-mail'
              rightIcon='arrow_forward'
              url=''
            />
          </div>
        </div>
      </div>
    </Section>
    <Section className='white-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={5} color='gray' text='How can we help you?' />
          <p className='gray form-information'>
            Would you like to browse through the help section to find the answer to your question
            before asking us?
          </p>
          <div className='button-container'>
            <ButtonLink color='gray-filled' text='Help page' rightIcon='arrow_forward' url='help' />
          </div>
        </div>
      </div>
    </Section>
    <Section className='gray-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={5} color='gray' text='Communication details' />
          <div className='paragraph-container'>
            <p className='gray'>
              You can directly write us to
              <br />
              <strong>hello@modern-ticketing.com</strong>
              <br />
              <br />
              or call us at
              <br />
              <strong>+44 7445 5100000</strong>
              <br />
              <br />
              <strong>Our office address is</strong>
              <br />
              233 North Road, Southbank, W2 2UL, London, UK
            </p>
          </div>
          <div className='button-container'>
            <ButtonLink color='blue-filled' text='Open maps' rightIcon='arrow_forward' url='' />
          </div>
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
