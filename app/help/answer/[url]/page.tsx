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
        <div className='flex'>
          <div className='help-left'>
            <Heading type={2} color='gray' text='Account' />
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
          <div className='help-right'>
            <Heading type={1} color='gray' text='Help article' />
            <div className='paragraph-container'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                qui dolorem ipsum quia dolor sit amet.
              </p>
            </div>

            <div className='button-container right'>
              <ButtonLink color='gray-overlay' text='Back to category' url='help/category/1' />
              &nbsp; &nbsp;
              <ButtonLink color='blue-filled' text='Back to help page' url='help' />
            </div>
          </div>
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
const canonical = 'https://modern-ticketing.com/help/answer/1';
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
