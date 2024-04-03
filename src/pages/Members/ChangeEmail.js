import { useNavigate } from 'react-router-dom';

import Input from '../../components/Form/Input';
import Master from '../../components/Layout/Master';
import Button from '../../components/Button/Button';
import Section from '../../components/Section/Section';
import Heading from '../../components/Heading/Heading';

const ChangeEmail = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/members/activate-email');
  };

  return (
    <Master>
      <Section className='white-background'>
        <div className='container'>
          <div className='center'>
            <Heading type={1} color='gray' text='Change e-mail' />
            <p className='gray'>
              Please enter your new email address. A verification email including your activation
              code will be sent to your new email address. Your current email address is{' '}
              <strong>cenk@cenksari.com</strong>
            </p>
          </div>
          <form className='form shrink' noValidate onSubmit={handleSubmit}>
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
                    onChange={() => {}}
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
                    onChange={() => {}}
                    required
                  />
                </div>
              </div>
              <div className='form-buttons'>
                <Button
                  type='button'
                  color='gray-overlay'
                  text='Go back'
                  onClick={() => navigate('/members')}
                />
                &nbsp; &nbsp;
                <Button type='submit' color='blue-filled' text='Submit' />
              </div>
            </div>
          </form>
        </div>
      </Section>
    </Master>
  );
};

export default ChangeEmail;
