import Input from '@components/Form/Input';
import Master from '@components/Layout/Master';
import Button from '@components/Button/Button';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';

const Page = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={1} color='gray' text='Forgot password' />
          <p className='gray'>
            Please enter your registered email address. Instructions for resetting your password
            will have sent to your email address. If you do not see the email in a few minutes,
            check your junk mail or spam folder.
          </p>
        </div>
        <form className='form shrink' noValidate>
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
                  placeholder='Enter your e-mail address'
                  required
                />
              </div>
            </div>
            <div className='form-buttons'>
              <Button type='submit' color='blue-filled' text='Reset password' />
            </div>
          </div>
        </form>
      </div>
    </Section>
  </Master>
);

export default Page;
