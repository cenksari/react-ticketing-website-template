import Input from '../../components/Form/Input';
import Master from '../../components/Layout/Master';
import Button from '../../components/Button/Button';
import Section from '../../components/Section/Section';
import Heading from '../../components/Heading/Heading';

const ActivationCode = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <Heading type={1} color='gray' text='Account activation' />
        <p className='gray'>
          Before you can sign in, you must activate your account with the code sent to your email
          address. If you do not see the email in a few minutes, check your junk mail or spam
          folder.
        </p>

        <form className='form shrink'>
          <div className='form-elements'>
            <div className='form-line'>
              <div className='label-line flex flex-v-center flex-space-between'>
                <label htmlFor='code'>Activation code</label>
              </div>
              <Input
                type='text'
                name='code'
                value=''
                maxLength={10}
                placeholder='Enter your activation code'
                onChange={() => {}}
                required
              />
            </div>
            <div className='form-buttons'>
              <Button type='submit' color='blue-filled' text='Activate account & sign in' />
            </div>
          </div>
        </form>
      </div>
    </Section>
  </Master>
);

export default ActivationCode;
