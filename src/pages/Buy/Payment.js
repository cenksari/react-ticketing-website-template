import { Link } from 'react-router-dom';

import Input from '../../components/Form/Input';
import Master from '../../components/Layout/Master';
import Button from '../../components/Button/Button';
import Section from '../../components/Section/Section';
import Heading from '../../components/Heading/Heading';

const Payment = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Master>
      <Section className='white-background'>
        <div className='container'>
          <div className='center'>
            <Heading type={1} color='gray' text='Buy tickets' />
            <p className='gray'>
              Please enter your personal &amp; payment details. We will issue and send your tickets
              your e-mail address immediately.
            </p>
          </div>

          <form className='form shrink center' noValidate onSubmit={handleSubmit}>
            <div className='form-elements'>
              <div className='form-line'>
                <Heading type={5} color='gray' text='Details' />
                <p>
                  <strong>Event</strong> Event name goes here
                </p>
                <p>
                  <strong>Venue</strong> Royal Albert Hall
                </p>
                <p>
                  <strong>Date</strong> Tue, Sep 21, 2024 19:00
                </p>
              </div>
              <div className='form-line padding-top'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th className='left'>Name</th>
                      <th className='center'>Qty.</th>
                      <th className='right'>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='left'>Child</td>
                      <td className='center'>2</td>
                      <td className='right'>£23</td>
                    </tr>
                    <tr>
                      <td className='left'>Adult</td>
                      <td className='center'>2</td>
                      <td className='right'>£23</td>
                    </tr>
                    <tr>
                      <td className='right' colSpan={3}>
                        <strong>Total : </strong> £23
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='form-line padding-top'>
                <Heading type={5} color='gray' text='Buyer info' />
              </div>
              <div className='form-line'>
                <div className='flex flex-v-center flex-space-between'>
                  <div className='two-line'>
                    <div className='label-line flex flex-v-center flex-space-between'>
                      <label htmlFor='name'>Name</label>
                    </div>
                    <Input
                      type='text'
                      name='name'
                      value=''
                      maxLength={48}
                      placeholder='Enter your name'
                      onChange={() => {}}
                      required
                    />
                  </div>
                  <div className='two-line'>
                    <div className='label-line flex flex-v-center flex-space-between'>
                      <label htmlFor='email'>E-mail address</label>
                    </div>
                    <Input
                      type='text'
                      name='email'
                      value=''
                      maxLength={64}
                      placeholder='Enter your e-mail address'
                      onChange={() => {}}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className='form-line padding-top'>
                <Heading type={5} color='gray' text='Payment details' />
              </div>
              <div className='form-line'>
                <div className='flex flex-v-center flex-space-between'>
                  <div className='two-line'>
                    <div className='label-line flex flex-v-center flex-space-between'>
                      <label htmlFor='cardName'>Name on card</label>
                    </div>
                    <Input
                      type='text'
                      name='cardName'
                      value=''
                      maxLength={48}
                      placeholder='Enter name on card'
                      onChange={() => {}}
                      required
                    />
                  </div>
                  <div className='two-line'>
                    <div className='label-line flex flex-v-center flex-space-between'>
                      <label htmlFor='cardNumber'>Card number</label>
                    </div>
                    <Input
                      type='text'
                      name='cardNumber'
                      value=''
                      maxLength={16}
                      placeholder='Enter your card number'
                      onChange={() => {}}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className='form-line'>
                <div className='flex flex-v-center flex-space-between'>
                  <div className='two-line'>
                    <div className='label-line flex flex-v-center flex-space-between'>
                      <label htmlFor='cardExpire'>Expiration date</label>
                    </div>
                    <Input
                      type='text'
                      name='cardExpire'
                      value=''
                      maxLength={4}
                      placeholder="Enter your card's expiration date"
                      onChange={() => {}}
                      required
                    />
                  </div>
                  <div className='two-line'>
                    <div className='label-line flex flex-v-center flex-space-between'>
                      <label htmlFor='cardCvc'>Security number</label>
                    </div>
                    <Input
                      type='text'
                      name='cardCvc'
                      value=''
                      maxLength={3}
                      placeholder="Enter your card's security number"
                      onChange={() => {}}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className='form-buttons'>
                <Button type='submit' color='blue-filled' text='Place payment & Issue tickets' />
              </div>
              <div className='form-line padding-top'>
                <p>
                  By clicking place payment button I agree to the&nbsp;
                  <Link to='/legal/terms-of-service' className='blue'>
                    Terms of service
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </Section>
    </Master>
  );
};

export default Payment;
