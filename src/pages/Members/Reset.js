import Input from '../../components/Form/Input';
import Master from '../../components/Layout/Master';
import Button from '../../components/Button/Button';
import Section from '../../components/Section/Section';
import Heading from '../../components/Heading/Heading';

const Reset = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Master>
      <Section className='white-background'>
        <div className='container'>
          <div className='center'>
            <Heading type={1} color='gray' text='Reset password' />
            <p className='gray'>
              Please enter your new password. We will change your password immediately.
            </p>
          </div>
          <form className='form shrink' noValidate onSubmit={handleSubmit}>
            <div className='form-elements'>
              <div className='form-line'>
                <div className='label-line flex flex-v-center flex-space-between'>
                  <label htmlFor='newPassword'>New password</label>
                </div>
                <Input
                  type='password'
                  name='newPassword'
                  value=''
                  maxLength={64}
                  placeholder='Enter your new password'
                  onChange={() => {}}
                  required
                />
              </div>
              <div className='form-line'>
                <div className='label-line flex flex-v-center flex-space-between'>
                  <label htmlFor='newPasswordAgain'>Confirm password</label>
                </div>
                <Input
                  type='password'
                  name='newPasswordAgain'
                  value=''
                  maxLength={64}
                  placeholder='Re-enter your password'
                  onChange={() => {}}
                  required
                />
              </div>
              <div className='form-buttons'>
                <Button type='submit' color='blue-filled' text='Reset password & sign in' />
              </div>
            </div>
          </form>
        </div>
      </Section>
    </Master>
  );
};

export default Reset;
