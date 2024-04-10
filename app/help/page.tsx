import Link from 'next/link';

import Input from '@components/Form/Input';
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import ButtonLink from '@components/Button/ButtonLink';

const expand: boolean = true;

const Page = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={1} color='gray' text='Help' />
          <p className='gray'>Welcome to our help center. How can we help today?</p>

          {!expand ? (
            <button type='button' className='expand-button'>
              <i className='material-symbols-outlined'>keyboard_arrow_down</i>
            </button>
          ) : (
            <>
              <div className='top-search'>
                <form noValidate>
                  <div className='search-inputs flex flex-h-center flex-space-between'>
                    <Input
                      type='text'
                      name='keyword'
                      value=''
                      maxLength={10}
                      placeholder='Search keyword, topic, question'
                      required
                    />
                    <button type='submit'>
                      <i className='material-symbols-outlined'>search</i>
                    </button>
                  </div>
                </form>
              </div>
              <div className='help-top flex flex-v-center flex-space-around'>
                <div className='center'>
                  <Heading type={5} color='gray' text='About us' />
                  <Link href='/' className='blue'>
                    <i className='material-symbols-outlined yellow'>star</i>
                    What is ticketing?
                  </Link>
                </div>
                <div className='center'>
                  <Heading type={5} color='gray' text='Account' />
                  <Link href='/' className='blue'>
                    <i className='material-symbols-outlined yellow'>star</i>
                    How to sign in?
                  </Link>
                </div>
                <div className='center'>
                  <Heading type={5} color='gray' text='Using system' />
                  <Link href='/' className='blue'>
                    <i className='material-symbols-outlined yellow'>star</i>
                    How can I get my tickets?
                  </Link>
                </div>
              </div>
            </>
          )}

          {expand && (
            <button type='button' className='expand-button'>
              <i className='material-symbols-outlined'>keyboard_arrow_up</i>
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
                <Link href='/' className='blue'>
                  What is ticketing?
                </Link>
                <Link href='/' className='blue'>
                  What is ticketing?
                </Link>
              </div>

              <ButtonLink
                color='gray-overlay'
                rightIcon='arrow_forward'
                text='See all'
                url='help'
              />
            </div>
            <div className='help-bottom-box'>
              <div className='links'>
                <Heading type={5} color='gray' text='Account' />
                <Link href='/' className='blue'>
                  How to sign in?
                </Link>
                <Link href='/' className='blue'>
                  What is ticketing?
                </Link>
              </div>

              <ButtonLink
                color='gray-overlay'
                rightIcon='arrow_forward'
                text='See all'
                url='help'
              />
            </div>
            <div className='help-bottom-box'>
              <div className='links'>
                <Heading type={5} color='gray' text='Using system' />
                <Link href='/' className='blue'>
                  How can I get my tickets?
                </Link>
              </div>

              <ButtonLink
                color='gray-overlay'
                rightIcon='arrow_forward'
                text='See all'
                url='help'
              />
            </div>
          </div>

          <div className='button-container'>
            <ButtonLink
              color='gray-filled'
              rightIcon='arrow_forward'
              text='See all articles'
              url='help'
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
              color='blue-overlay'
              rightIcon='arrow_forward'
              text='Contact us'
              url='contact'
            />
          </div>
        </div>
      </div>
    </Section>
  </Master>
);

export default Page;
