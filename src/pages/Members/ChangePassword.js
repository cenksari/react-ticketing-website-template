import Input from '../../components/Form/Input';
import Master from '../../components/Layout/Master';
import Button from '../../components/Button/Button';
import Section from '../../components/Section/Section';
import Heading from '../../components/Heading/Heading';

const ChangePassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Master>
      <Section className='white-background'>
        <div className='container'>
          <div className='center'>
            <Heading type={1} color='gray' text='Change password' />
            <p className='gray'>
              Please enter your new password. It&apos;s a good idea to use a strong password that
              you are not using elsewhere. Your new password must be at least 8 characters.
            </p>
          </div>
          <form className='form shrink' noValidate onSubmit={handleSubmit}>
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
                  onChange={() => {}}
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
                  onChange={() => {}}
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
                  onChange={() => {}}
                  required
                />
              </div>
              <div className='form-buttons'>
                <Button type='button' color='gray-overlay' text='Go back' />
                &nbsp; &nbsp;
                <Button type='submit' color='blue-filled' text='Change password' />
              </div>
            </div>
          </form>
        </div>
      </Section>
    </Master>
  );
};

export default ChangePassword;
