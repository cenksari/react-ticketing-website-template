import Input from '@components/Form/Input';
import Master from '@components/Layout/Master';
import Button from '@components/Button/Button';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import ButtonLink from '@components/Button/ButtonLink';

const Page = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={1} color='gray' text='Change e-mail' />
          <p className='gray'>
            Please enter your new email address. A verification email including your activation code
            will be sent to your new email address. Your current email address is{' '}
            <strong>cenk@cenksari.com</strong>
          </p>
        </div>
        <form method='POST' action='/members/activate/email' className='form shrink' noValidate>
          <div className='form-elements'>
            <div className='form-line'>
              <div className='one-line'>
                <div className='label-line'>
                  <label htmlFor='email'>E-mail address</label>
                </div>
                <Input
                  type='email'
                  name='email'
                  value=''
                  maxLength={128}
                  placeholder='Enter your new e-mail address'
                  required
                />
              </div>
            </div>
            <div className='form-line'>
              <div className='one-line'>
                <div className='label-line'>
                  <label htmlFor='emailAgain'>Confirm e-mail address</label>
                </div>
                <Input
                  type='email'
                  name='emailAgain'
                  value=''
                  maxLength={128}
                  placeholder='Re-enter your new e-mail address'
                  required
                />
              </div>
            </div>
            <div className='form-buttons'>
              <ButtonLink color='gray-overlay' text='Go back' url='members/profile' />
              &nbsp; &nbsp;
              <Button type='submit' color='blue-filled' text='Submit' />
            </div>
          </div>
        </form>
      </div>
    </Section>
  </Master>
);

const title = 'Change e-mail';
const canonical = 'https://modern-ticketing.com/members/email';
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
