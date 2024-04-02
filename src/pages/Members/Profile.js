import { Link, useNavigate } from 'react-router-dom';

import Input from '../../components/Form/Input';
import Button from '../../components/Button/Button';
import Master from '../../components/Layout/Master';
import Section from '../../components/Section/Section';
import Heading from '../../components/Heading/Heading';
import ProfilePhoto from '../../components/ProfilePhoto/ProfilePhoto';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup';
import ButtonGroupItem from '../../components/ButtonGroup/ButtonGroupItem';

const Profile = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Master>
      <Section className='white-background'>
        <div className='container'>
          <div className='center'>
            <Heading type={1} color='gray' text='My account' />
            <p className='gray'>
              Before you can sign in, you must activate your account with the code sent to your
              email address. If you do not see the email in a few minutes, check your junk mail or
              spam folder.
            </p>
            <div className='button-container'>
              <ButtonGroup color='gray'>
                <ButtonGroupItem text='My account' onClick={() => {}} active />
                <ButtonGroupItem text='My tickets' onClick={() => navigate('/tickets')} />
              </ButtonGroup>
            </div>
            <div>
              <ProfilePhoto image='https://www.cenksari.com/content/profile.jpg' size='large' />
              <span className='muted'>click profile picture to change</span>
            </div>
          </div>

          <form className='form shrink' noValidate onSubmit={handleSubmit}>
            <div className='form-elements'>
              <div className='form-line'>
                <div className='one-line'>
                  <div className='label-line'>
                    <label htmlFor='name'>Name</label>
                  </div>
                  <Input
                    type='text'
                    name='name'
                    value=''
                    maxLength={64}
                    placeholder='Enter your name'
                    onChange={() => {}}
                    required
                  />
                </div>
              </div>
              <div className='form-line'>
                <div className='one-line'>
                  <div className='label-line'>
                    <label htmlFor='lastname'>Last name</label>
                  </div>
                  <Input
                    type='text'
                    name='lastname'
                    value=''
                    maxLength={64}
                    placeholder='Enter your last name'
                    onChange={() => {}}
                    required
                  />
                </div>
              </div>
              <div className='form-line'>
                <div className='one-line'>
                  <div className='label-line flex flex-v-center flex-space-between'>
                    <label htmlFor='email'>E-mail address</label>
                    <Link to='/members/change-email' className='blue'>
                      Change e-mail
                    </Link>
                  </div>
                  <Input
                    type='email'
                    name='email'
                    value=''
                    maxLength={128}
                    placeholder='Enter your e-mail address'
                    onChange={() => {}}
                    required
                    disabled
                  />
                </div>
              </div>
              <div className='form-line'>
                <div className='label-line flex flex-v-center flex-space-between'>
                  <label htmlFor='password'>Password</label>
                  <Link to='/members/change-password' className='blue'>
                    Change password
                  </Link>
                </div>
                <Input
                  type='password'
                  name='password'
                  value=''
                  maxLength={64}
                  placeholder='Enter your password'
                  onChange={() => {}}
                  required
                  disabled
                />
              </div>
              <div className='form-buttons'>
                <Button type='submit' color='blue-filled' text='Update profile' />
              </div>
            </div>
          </form>
        </div>
      </Section>
    </Master>
  );
};

export default Profile;
