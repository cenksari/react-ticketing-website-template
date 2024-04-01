import Master from '../../components/Layout/Master';
import Section from '../../components/Section/Section';
import Heading from '../../components/Heading/Heading';

const News = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={1} color='gray' text='News' />
        </div>
      </div>
    </Section>
  </Master>
);

export default News;
