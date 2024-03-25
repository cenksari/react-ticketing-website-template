import { Link } from 'react-router-dom';

import Box from '../../components/Box/Box';
import Button from '../../components/Button/Button';
import Master from '../../components/Layout/Master';
import Section from '../../components/Section/Section';
import Heading from '../../components/Heading/Heading';
import EventCard from '../../components/Card/EventCard';
import ButtonLink from '../../components/Button/ButtonLink';
import MultipleSlider from '../../components/Slider/MultipleSlider';

const Home = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div>
          <Heading type={2} color='orange' text='Featured' />
        </div>
        <div className='slider'>
          <MultipleSlider>
            <Link to='/event'>
              <div
                className='slide cover-image'
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                }}
              >
                <div className='info'>
                  <div className='flex flex-v-center flex-space-between'>
                    <div>
                      <Heading type={3} color='orange' text='Event name goes here' />
                      <p className='white'>Tue, Sep 21, 2024 19:00</p>
                      <p className='white'>Royal Albert Hall</p>
                    </div>
                    <Button
                      color='orange-filled responsive-hide'
                      text='Details'
                      rightIcon='arrow_forward'
                      onClick={() => {}}
                    />
                  </div>
                </div>
              </div>
            </Link>
            <Link to='/event' className='slide cover-image'>
              <div
                className='slide'
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                }}
              >
                <div className='info'>
                  <div className='flex flex-v-center flex-space-between'>
                    <div>
                      <Heading type={3} color='green' text='Event name goes here' />
                      <p className='white'>Tue, Sep 21, 2024 19:00</p>
                      <p className='white'>Royal Albert Hall</p>
                    </div>
                    <Button
                      color='green-filled responsive-hide'
                      text='Details'
                      rightIcon='arrow_forward'
                      onClick={() => {}}
                    />
                  </div>
                </div>
              </div>
            </Link>
          </MultipleSlider>
        </div>
      </div>
    </Section>

    <Section className='white-background no-padding-top'>
      <div className='container'>
        <div className='flex flex-v-center flex-space-between'>
          <div className='title'>
            <Heading type={2} color='gray' text='Filter for me:' />
          </div>
          <div className='filters responsive-hide'>
            <ButtonLink color='gray-overlay' text='This week' onClick='/' />
            &nbsp;&nbsp;
            <ButtonLink color='gray-overlay' text='This weekend' onClick='/' />
            &nbsp;&nbsp;
            <ButtonLink color='gray-overlay' text='This month' onClick='/' />
            &nbsp;&nbsp;
            <ButtonLink color='gray-overlay' text='Under £20' onClick='/' />
          </div>
          <div className='filters responsive-show'>
            <ButtonLink
              color='gray-overlay'
              text='Filters'
              rightIcon='keyboard_arrow_down'
              onClick='/'
            />
          </div>
        </div>
      </div>
    </Section>

    <Section>
      <div className='container'>
        <div className='title flex flex-v-center flex-space-between'>
          <Heading type={2} color='blue' text='Latest events' />
          <ButtonLink
            color='blue-overlay'
            text='See all'
            rightIcon='arrow_forward'
            onClick='/discover'
          />
        </div>

        <div className='carousel'>
          <MultipleSlider>
            <EventCard
              from='20'
              color='blue'
              when='Tue, Sep 21, 2024 19:00'
              name='Event name goes here'
              venue='Royal Albert Hall'
              image='https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <EventCard
              from='25'
              color='blue'
              when='Web, Aug 9, 2024 22:00'
              name='Event name goes here'
              venue='o2 Arena'
              image='https://images.unsplash.com/photo-1472691681358-fdf00a4bfcfe?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <EventCard
              from='10'
              color='blue'
              when='Sun, Mar 14, 2024 15:00'
              name='Event name goes here'
              venue='Wembley Stadium'
              image='https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <EventCard
              from='60'
              color='blue'
              when='Mon, Jul 2, 2024 20:00'
              name='Event name goes here'
              venue='Eventim Apollo'
              image='https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <EventCard
              from='20'
              color='blue'
              when='Tue, Sep 21, 2024 19:00'
              name='Event name goes here'
              venue='Royal Albert Hall'
              image='https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <EventCard
              from='25'
              color='blue'
              when='Web, Aug 9, 2024 22:00'
              name='Event name goes here'
              venue='o2 Arena'
              image='https://images.unsplash.com/photo-1472691681358-fdf00a4bfcfe?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
          </MultipleSlider>
        </div>
      </div>
    </Section>

    <Section className='white-background'>
      <div className='container responsive-center'>
        <Heading type={2} color='purple' text='Sustainable ticketing' />
        <p className='gray'>
          Stunning, white-labelled pages to promote your event. To get started selling tickets
          online with Modern ticketing, you&apos;ll first create a beautiful event website to
          promote your event.
        </p>
        <div className='button-container center'>
          <ButtonLink
            text='Get started'
            color='purple-filled'
            rightIcon='arrow_forward'
            onClick='/promoters'
          />
        </div>
      </div>
    </Section>

    <Section>
      <div className='container'>
        <div className='title flex flex-v-center flex-space-between'>
          <Heading type={2} color='red' text='More events' />
          <ButtonLink
            color='red-overlay'
            text='See all'
            rightIcon='arrow_forward'
            onClick='/discover'
          />
        </div>
        <div className='carousel'>
          <MultipleSlider>
            <EventCard
              from='20'
              color='red'
              when='Tue, Sep 21, 2024 19:00'
              name='Event name goes here'
              venue='Royal Albert Hall'
              image='https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <EventCard
              from='25'
              color='red'
              when='Web, Aug 9, 2024 22:00'
              name='Event name goes here'
              venue='o2 Arena'
              image='https://images.unsplash.com/photo-1472691681358-fdf00a4bfcfe?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <EventCard
              from='10'
              color='red'
              when='Sun, Mar 14, 2024 15:00'
              name='Event name goes here'
              venue='Wembley Stadium'
              image='https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <EventCard
              from='60'
              color='red'
              when='Mon, Jul 2, 2024 20:00'
              name='Event name goes here'
              venue='Eventim Apollo'
              image='https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <EventCard
              from='20'
              color='red'
              when='Tue, Sep 21, 2024 19:00'
              name='Event name goes here'
              venue='Royal Albert Hall'
              image='https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <EventCard
              from='25'
              color='red'
              when='Web, Aug 9, 2024 22:00'
              name='Event name goes here'
              venue='o2 Arena'
              image='https://images.unsplash.com/photo-1472691681358-fdf00a4bfcfe?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
          </MultipleSlider>
        </div>
      </div>
    </Section>

    <Section>
      <div className='container'>
        <div className='center padding-bottom'>
          <Heading type={2} color='yellow' text='How it works?' />
          <Heading type={5} color='gray' text='100% Modern Ticketing backed guarantee.' />
        </div>

        <div className='carousel'>
          <MultipleSlider>
            <Box className='gray'>
              <i className='material-icons blue'>arrow_forward</i>
              <p>Speaking honestly to customers and treating them like family</p>
            </Box>
            <Box className='gray'>
              <i className='material-icons red'>arrow_forward</i>
              <p>Speaking honestly to customers and treating them like family</p>
            </Box>
            <Box className='gray'>
              <i className='material-icons purple'>arrow_forward</i>
              <p>Speaking honestly to customers and treating them like family</p>
            </Box>
            <Box className='gray'>
              <i className='material-icons green'>arrow_forward</i>
              <p>Speaking honestly to customers and treating them like family</p>
            </Box>
            <Box className='gray'>
              <i className='material-icons yellow'>arrow_forward</i>
              <p>Speaking honestly to customers and treating them like family</p>
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
      </div>
    </Section>
  </Master>
);

export default Home;
