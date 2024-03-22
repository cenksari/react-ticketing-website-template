import { Link } from 'react-router-dom';

import Input from '../../components/Form/Input';
import Master from '../../components/Layout/Master';
import Button from '../../components/Button/Button';
import Section from '../../components/Section/Section';
import Heading from '../../components/Heading/Heading';

const Signin = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <Heading type={1} color='gray' text='Sign in' />
        <p className='gray'>
          Please enter your e-mail address and password to sign in. Don&apos;t have an account?{' '}
          <Link to='/members/signup' className='blue'>
            Sign up here
          </Link>
          .
        </p>

        <form className='form shrink'>
          <div className='form-elements'>
            <div className='form-line'>
              <div className='one-line'>
                <button type='button' className='google-button' onClick={() => {}}>
                  <svg
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                    width='18px'
                    height='18px'
                    viewBox='0 0 48 48'
                  >
                    <g>
                      <path
                        fill='#EA4335'
                        d='M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z'
                      />
                      <path
                        fill='#4285F4'
                        d='M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z'
                      />
                      <path
                        fill='#FBBC05'
                        d='M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z'
                      />
                      <path
                        fill='#34A853'
                        d='M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z'
                      />
                      <path fill='none' d='M0 0h48v48H0z' />
                    </g>
                  </svg>
                  <span>Sign in with Google</span>
                </button>
              </div>
            </div>
            <div className='or-line'>
              <hr />
              <span>OR</span>
            </div>
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
                  onChange={() => {}}
                />
              </div>
            </div>
            <div className='form-line'>
              <div className='label-line flex flex-v-center flex-space-between'>
                <label htmlFor='password'>Password</label>
                <Link to='/members/forgot-password' className='blue'>
                  Forgot password?
                </Link>
              </div>
              <Input
                type='password'
                name='password'
                value=''
                maxLength={64}
                placeholder='Enter your password'
                onChange={() => {}}
              />
            </div>
            <div className='form-buttons'>
              <Button type='submit' color='blue-filled' text='Sign in' />
            </div>
          </div>
        </form>
      </div>
    </Section>
  </Master>
);

export default Signin;
