import Link from 'next/link';

import Button from '@components/Button/Button';
import Master from '@components/Layout/Master';
import Slider from '@components/Slider/Slider';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import EventCard from '@components/Card/EventCard';
import CardGroup from '@components/Card/CardGroup';
import ButtonLink from '@components/Button/ButtonLink';

const Page = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div>
          <Heading type={2} color='orange' text='Featured' />
        </div>
        <div className='slider'>
          <Slider>
            <Link href='/event/event'>
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
                    />
                  </div>
                </div>
              </div>
            </Link>
            <Link href='/event' className='slide cover-image'>
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
                    />
                  </div>
                </div>
              </div>
            </Link>
          </Slider>
        </div>
      </div>
    </Section>

    <Section className='white-background no-padding-top'>
      <div className='container'>
        <div className='flex flex-v-center flex-space-between'>
          <div className='title'>
            <Heading type={2} color='gray' text='Filter for me' />
          </div>
          <div className='filters responsive-hide'>
            <ButtonLink color='gray-overlay' text='This week' url='discover' />
            &nbsp;&nbsp;
            <ButtonLink color='gray-overlay' text='This weekend' url='discover' />
            &nbsp;&nbsp;
            <ButtonLink color='gray-overlay' text='This month' url='discover' />
            &nbsp;&nbsp;
            <ButtonLink color='gray-overlay' text='Under £20' url='discover' />
          </div>
          <div className='filters responsive-show'>
            <ButtonLink
              color='gray-overlay'
              text='Filters'
              rightIcon='keyboard_arrow_down'
              url='discover'
            />
          </div>
        </div>
      </div>
    </Section>

    <CardGroup url='discover' title='Latest events' color='blue' background='gray'>
      <EventCard
        url='1'
        from='20'
        color='blue'
        when='Tue, Sep 21, 2024 19:00'
        name='Event name goes here'
        venue='Royal Albert Hall'
        image='https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <EventCard
        url='1'
        from='25'
        color='blue'
        when='Wed, Aug 9, 2024 22:00'
        name='Event name goes here'
        venue='o2 Arena'
        image='https://images.unsplash.com/photo-1472691681358-fdf00a4bfcfe?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <EventCard
        url='1'
        from='10'
        color='blue'
        when='Sun, Mar 14, 2024 15:00'
        name='Event name goes here'
        venue='Wembley Stadium'
        image='https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <EventCard
        url='1'
        from='60'
        color='blue'
        when='Mon, Jul 2, 2024 20:00'
        name='Event name goes here'
        venue='Eventim Apollo'
        image='https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <EventCard
        url='1'
        from='20'
        color='blue'
        when='Tue, Sep 21, 2024 19:00'
        name='Event name goes here'
        venue='Royal Albert Hall'
        image='https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <EventCard
        url='1'
        from='25'
        color='blue'
        when='Wed, Aug 9, 2024 22:00'
        name='Event name goes here'
        venue='o2 Arena'
        image='https://images.unsplash.com/photo-1472691681358-fdf00a4bfcfe?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
    </CardGroup>

    <CardGroup url='discover' title='More events' color='red' background='white'>
      <EventCard
        url='1'
        from='20'
        color='red'
        when='Tue, Sep 21, 2024 19:00'
        name='Event name goes here'
        venue='Royal Albert Hall'
        image='https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <EventCard
        url='1'
        from='25'
        color='red'
        when='Wed, Aug 9, 2024 22:00'
        name='Event name goes here'
        venue='o2 Arena'
        image='https://images.unsplash.com/photo-1472691681358-fdf00a4bfcfe?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <EventCard
        url='1'
        from='10'
        color='red'
        when='Sun, Mar 14, 2024 15:00'
        name='Event name goes here'
        venue='Wembley Stadium'
        image='https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <EventCard
        url='1'
        from='60'
        color='red'
        when='Mon, Jul 2, 2024 20:00'
        name='Event name goes here'
        venue='Eventim Apollo'
        image='https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <EventCard
        url='1'
        from='20'
        color='red'
        when='Tue, Sep 21, 2024 19:00'
        name='Event name goes here'
        venue='Royal Albert Hall'
        image='https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <EventCard
        url='1'
        from='25'
        color='red'
        when='Wed, Aug 9, 2024 22:00'
        name='Event name goes here'
        venue='o2 Arena'
        image='https://images.unsplash.com/photo-1472691681358-fdf00a4bfcfe?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
    </CardGroup>
  </Master>
);

export default Page;
