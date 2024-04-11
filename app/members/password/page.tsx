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
          <Heading type={1} color='gray' text='Change password' />
          <p className='gray'>
            Please enter your new password. It&apos;s a good idea to use a strong password that you
            are not using elsewhere. Your new password must be at least 8 characters.
          </p>
        </div>
        <form className='form shrink' noValidate>
          <div className='form-elements'>
            <div className='form-line'>
              <div className='label-line'>
                <label htmlFor='password'>Current password</label>
              </div>
              <Input
                type='password'
                name='password'
                value=''
                maxLength={64}
                placeholder='Enter your current password'
                required
              />
            </div>
            <div className='form-line'>
              <div className='label-line'>
                <label htmlFor='newPassword'>New password</label>
              </div>
              <Input
                type='password'
                name='newPassword'
                value=''
                maxLength={64}
                placeholder='Enter your new password'
                required
              />
            </div>
            <div className='form-line'>
              <div className='label-line'>
                <label htmlFor='newPasswordAgain'>Confirm new password</label>
              </div>
              <Input
                type='password'
                name='newPasswordAgain'
                value=''
                maxLength={64}
                placeholder='Re-enter your new password'
                required
              />
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

const title = 'Change password';
const canonical = 'https://modern-ticketing.com/members/password';
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
