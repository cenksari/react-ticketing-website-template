import Master from '../../components/Layout/Master';
import Section from '../../components/Section/Section';
import Heading from '../../components/Heading/Heading';
import ButtonLink from '../../components/Button/ButtonLink';

const Home = () => (
  <Master>
    <Section className='container'>
      <div className='flex flex-v-center flex-space-between'>
        <Heading type={2} color='blue' text='Latest events' />
        <ButtonLink color='blue-overlay' text='See all' rightIcon='arrow_forward' onClick='/' />
      </div>
    </Section>

    <Section className='container'>
      <div className='flex flex-v-center flex-space-between'>
        <Heading type={2} color='red' text='More events' />
        <ButtonLink color='red-overlay' text='See all' rightIcon='arrow_forward' onClick='/' />
      </div>
    </Section>
  </Master>
);

export default Home;
