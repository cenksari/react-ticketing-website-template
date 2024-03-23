import Master from '../../components/Layout/Master';
import Section from '../../components/Section/Section';
import Heading from '../../components/Heading/Heading';

const Legal = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <Heading type={1} color='gray' text='Legal' />
      </div>
    </Section>
  </Master>
);

export default Legal;
