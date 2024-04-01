import Master from '../../components/Layout/Master';
import Section from '../../components/Section/Section';
import Heading from '../../components/Heading/Heading';
import ButtonLink from '../../components/Button/ButtonLink';

const Tickets = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={1} color='gray' text='My tickets' />
          <p className='gray'>
            Before you can sign in, you must activate your account with the code sent to your email
            address. If you do not see the email in a few minutes, check your junk mail or spam
            folder.
          </p>
          <div className='button-container'>
            <ButtonLink color='gray-overlay' text='My account' onClick='/members' />
            &nbsp; &nbsp;
            <ButtonLink color='gray-filled' text='My tickets' onClick='/tickets' />
          </div>
        </div>
      </div>
    </Section>
  </Master>
);

export default Tickets;
