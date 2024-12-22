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
          <Heading type={1} color='gray' text='404' />
          <p className='gray form-information'>
            Requested page not found in our server. Please return to our home page and find the page
            again.
          </p>

          <div className='button-container'>
            <ButtonLink color='blue-filled' text='Return to home' url='' />
          </div>
        </div>
      </div>
    </Section>
  </Master>
);

export default Page;
