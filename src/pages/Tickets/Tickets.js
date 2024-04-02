import { useNavigate } from 'react-router-dom';

import Master from '../../components/Layout/Master';
import Section from '../../components/Section/Section';
import Heading from '../../components/Heading/Heading';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup';
import ButtonGroupItem from '../../components/ButtonGroup/ButtonGroupItem';

const Tickets = () => {
  const navigate = useNavigate();

  return (
    <Master>
      <Section className='white-background'>
        <div className='container'>
          <div className='center'>
            <Heading type={1} color='gray' text='My tickets' />
            <p className='gray'>
              Before you can sign in, you must activate your account with the code sent to your
              email address. If you do not see the email in a few minutes, check your junk mail or
              spam folder.
            </p>
            <div className='button-container'>
              <ButtonGroup color='gray'>
                <ButtonGroupItem text='My account' onClick={() => navigate('/members')} />
                <ButtonGroupItem text='My tickets' onClick={() => {}} active />
              </ButtonGroup>
            </div>
          </div>
        </div>
      </Section>
    </Master>
  );
};

export default Tickets;
