import Master from '../../components/Layout/Master';
import Section from '../../components/Section/Section';
import Heading from '../../components/Heading/Heading';

const Help = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <Heading type={1} color='gray' text='Help' />
      </div>
    </Section>
  </Master>
);

export default Help;
