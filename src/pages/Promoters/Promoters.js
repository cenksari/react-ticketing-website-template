import Box from '../../components/Box/Box';
import Master from '../../components/Layout/Master';
import Section from '../../components/Section/Section';
import Heading from '../../components/Heading/Heading';
import ButtonLink from '../../components/Button/ButtonLink';
import MultipleSlider from '../../components/Slider/MultipleSlider';

const Promoters = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={1} color='gray' text='Promoters' />
          <p className='gray'>
            Whether you&apos;re selling one ticket or a hundred thousand, the Modern ticketing
            infrastructure is designed to meet all your needs. Plus, there are no additional fees or
            surprises added later!
          </p>
        </div>
      </div>
    </Section>

    <Section>
      <div className='center'>
        <Heading type={2} color='red' text='Manage everything with a single application' />
        <p className='gray'>
          With our specially designed Promoter application, you can track ticket sales in real-time
          and admit customers at the door with your barcode scanner. Plus, it&apos;s free!
        </p>
      </div>
    </Section>

    <Section>
      <div className='container'>
        <div className='center padding-bottom'>
          <Heading type={2} color='yellow' text='How it works?' />
          <Heading type={5} color='gray' text='100% Modern Ticketing backed guarantee.' />
        </div>
      </div>

      <div className='carousel'>
        <MultipleSlider>
          <Box className='gray'>
            <i className='material-icons blue'>arrow_forward</i>
            <p>You have a team dedicated to serving your customers individually</p>
          </Box>
          <Box className='gray'>
            <i className='material-icons red'>arrow_forward</i>
            <p>You have a team dedicated to serving your customers individually</p>
          </Box>
          <Box className='gray'>
            <i className='material-icons purple'>arrow_forward</i>
            <p>You have a team dedicated to serving your customers individually</p>
          </Box>
          <Box className='gray'>
            <i className='material-icons green'>arrow_forward</i>
            <p>You have a team dedicated to serving your customers individually</p>
          </Box>
          <Box className='gray'>
            <i className='material-icons yellow'>arrow_forward</i>
            <p>You have a team dedicated to serving your customers individually</p>
          </Box>
        </MultipleSlider>
      </div>

      <div className='button-container center'>
        <ButtonLink
          text='Get started'
          color='yellow-filled'
          rightIcon='arrow_forward'
          onClick='/promoters'
        />
      </div>
    </Section>
  </Master>
);

export default Promoters;
