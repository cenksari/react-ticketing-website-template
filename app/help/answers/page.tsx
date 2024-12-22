import Link from 'next/link';

import { type Metadata } from 'next';

// components
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import ButtonLink from '@components/Button/ButtonLink';

const Page: React.FC = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={1} color='gray' text='All answers' />
          <p className='gray'>Showing all help answers and all categories.</p>
        </div>
      </div>
    </Section>

    <Section className='white-background'>
      <div className='container'>
        <div className='help-answers center'>
          <Link href='/help/category/1'>
            <Heading type={5} color='gray' text='Help category' />
          </Link>

          <ul>
            <li>
              <Link href='/help/answer/1' className='blue'>
                How can i sign in?
              </Link>
            </li>
            <li>
              <Link href='/help/answer/1' className='blue'>
                How can i sign up?
              </Link>
            </li>
            <li>
              <Link href='/help/answer/1' className='blue'>
                Reset your password
              </Link>
            </li>
          </ul>

          <Link href='/help/category/1'>
            <Heading type={5} color='gray' text='Help category' />
          </Link>

          <ul>
            <li>
              <Link href='/help/answer/1' className='blue'>
                How can i sign in?
              </Link>
            </li>
            <li>
              <Link href='/help/answer/1' className='blue'>
                How can i sign up?
              </Link>
            </li>
            <li>
              <Link href='/help/answer/1' className='blue'>
                Reset your password
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Section>

    <Section className='gray-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={3} color='gray' text='Any questions?' />
          <p className='gray'>
            If you can&apos;t find what you are looking for or need further support please contact
            us and we will be happy to help.
          </p>

          <div className='button-container'>
            <ButtonLink
              color='blue-filled'
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

const title = 'Help';
const canonical = 'https://modern-ticketing.com/help/answers';
const description = 'Modern ticketing is a modern ticketing solution';

export const metadata: Metadata = {
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
