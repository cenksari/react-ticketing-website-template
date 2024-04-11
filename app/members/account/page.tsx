import Link from 'next/link';

import Input from '@components/Form/Input';
import Button from '@components/Button/Button';
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import ButtonGroup from '@components/Button/ButtonGroup';
import ProfilePhoto from '@components/Profile/ProfilePhoto';
import ButtonGroupItem from '@components/Button/ButtonGroupItem';

const Page = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={1} color='gray' text='My account' />
          <p className='gray'>
            Before you can sign in, you must activate your account with the code sent to your email
            address. If you do not see the email in a few minutes, check your junk mail or spam
            folder.
          </p>
          <div className='button-container'>
            <ButtonGroup color='gray'>
              <ButtonGroupItem url='members/tickets' text='My tickets' />
              <ButtonGroupItem url='members/account' text='My account' active />
            </ButtonGroup>
          </div>
          <div className='upload-picture'>
            <input type='file' name='image' id='image' className='input-file' accept='.jpg,.jpeg' />
            <label htmlFor='image'>
              <span className='material-symbols-outlined'>add_a_photo</span>
            </label>
            <ProfilePhoto image='https://www.cenksari.com/content/profile.jpg' size='large' />
            <span className='muted'>click profile picture to change</span>
          </div>
        </div>

        <form className='form shrink' noValidate>
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
                  required
                />
              </div>
            </div>
            <div className='form-line'>
              <div className='one-line'>
                <div className='label-line flex flex-v-center flex-space-between'>
                  <label htmlFor='email'>E-mail address</label>
                  <Link href='/members/email' className='blue'>
                    Change e-mail
                  </Link>
                </div>
                <Input
                  type='email'
                  name='email'
                  value=''
                  maxLength={128}
                  placeholder='Enter your e-mail address'
                  required
                  disabled
                />
              </div>
            </div>
            <div className='form-line'>
              <div className='label-line flex flex-v-center flex-space-between'>
                <label htmlFor='password'>Password</label>
                <Link href='/members/password' className='blue'>
                  Change password
                </Link>
              </div>
              <Input
                type='password'
                name='password'
                value='dummypassword'
                maxLength={64}
                placeholder='Enter your password'
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

const title = 'My account';
const canonical = 'https://modern-ticketing.com/members/account';
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
