import { useState } from 'react';

import { Link } from 'react-router-dom';

import Input from '../../components/Form/Input';
import Button from '../../components/Button/Button';
import Master from '../../components/Layout/Master';
import Section from '../../components/Section/Section';
import Heading from '../../components/Heading/Heading';
import ButtonLink from '../../components/Button/ButtonLink';

const Help = () => {
  const [expand, setExpand] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Master>
      <Section className='white-background'>
        <div className='container'>
          <div className='center'>
            <Heading type={1} color='gray' text='Help' />
            <p className='gray'>Welcome to our help center. How can we help today?</p>

            {!expand ? (
              <button type='button' className='expand-button' onClick={() => setExpand(true)}>
                <i className='material-icons'>keyboard_arrow_down</i>
              </button>
            ) : (
              <>
                <div className='top-search'>
                  <form className='form' noValidate onSubmit={handleSubmit}>
                    <div className='form-elements'>
                      <div className='form-line'>
                        <Input
                          type='text'
                          name='code'
                          value=''
                          maxLength={10}
                          placeholder='Search keyword'
                          onChange={() => {}}
                          required
                        />
                      </div>
                      <div className='form-buttons'>
                        <Button
                          type='submit'
                          color='blue-filled'
                          text='Search articles'
                          leftIcon='search'
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className='help-top flex flex-v-center flex-space-around'>
                  <div className='center'>
                    <Heading type={5} color='gray' text='About us' />
                    <Link to='/' className='blue'>
                      <i className='material-icons yellow'>star</i>
                      What is ticketing?
                    </Link>
                  </div>
                  <div className='center'>
                    <Heading type={5} color='gray' text='Account' />
                    <Link to='/' className='blue'>
                      <i className='material-icons yellow'>star</i>
                      How to sign in?
                    </Link>
                  </div>
                  <div className='center'>
                    <Heading type={5} color='gray' text='Using system' />
                    <Link to='/' className='blue'>
                      <i className='material-icons yellow'>star</i>
                      How can I get my tickets?
                    </Link>
                  </div>
                </div>
              </>
            )}

            {expand && (
              <button type='button' className='expand-button' onClick={() => setExpand(false)}>
                <i className='material-icons'>keyboard_arrow_up</i>
              </button>
            )}
          </div>
        </div>
      </Section>

      <Section className='white-background'>
        <div className='container'>
          <div className='center'>
            <Heading type={2} color='gray' text='Featured articles' />
            <div className='help-bottom flex flex-space-around padding-top padding-bottom'>
              <div className='help-bottom-box'>
                <div className='links'>
                  <Heading type={5} color='gray' text='About us' />
                  <Link to='/' className='blue'>
                    What is ticketing?
                  </Link>
                  <Link to='/' className='blue'>
                    What is ticketing?
                  </Link>
                </div>

                <ButtonLink
                  onClick='/'
                  color='gray-overlay'
                  rightIcon='arrow_forward'
                  text='See all'
                />
              </div>
              <div className='help-bottom-box'>
                <div className='links'>
                  <Heading type={5} color='gray' text='Account' />
                  <Link to='/' className='blue'>
                    How to sign in?
                  </Link>
                  <Link to='/' className='blue'>
                    What is ticketing?
                  </Link>
                </div>

                <ButtonLink
                  onClick='/'
                  color='gray-overlay'
                  rightIcon='arrow_forward'
                  text='See all'
                />
              </div>
              <div className='help-bottom-box'>
                <div className='links'>
                  <Heading type={5} color='gray' text='Using system' />
                  <Link to='/' className='blue'>
                    How can I get my tickets?
                  </Link>
                </div>

                <ButtonLink
                  onClick='/'
                  color='gray-overlay'
                  rightIcon='arrow_forward'
                  text='See all'
                />
              </div>
            </div>

            <div className='button-container'>
              <ButtonLink
                onClick='/'
                color='gray-filled'
                rightIcon='arrow_forward'
                text='See all articles'
              />
            </div>
          </div>
        </div>
      </Section>

      <Section className='white-background'>
        <div className='container'>
          <div className='center'>
            <Heading type={3} color='gray' text='Any questions?' />
            <p className='gray'>
              Try our help centre to browse our articles to find the information you need. If you
              can&apos;t find what you are looking for or need further support please contact us and
              we will be happy to help.
            </p>

            <div className='button-container'>
              <ButtonLink
                onClick='/contact'
                color='blue-overlay'
                rightIcon='arrow_forward'
                text='Contact us'
              />
            </div>
          </div>
        </div>
      </Section>
    </Master>
  );
};

export default Help;
