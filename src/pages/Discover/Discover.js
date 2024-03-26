import { useState } from 'react';

import Input from '../../components/Form/Input';
import Button from '../../components/Button/Button';
import Master from '../../components/Layout/Master';
import Section from '../../components/Section/Section';
import Heading from '../../components/Heading/Heading';
import EventCard from '../../components/Card/EventCard';
import ButtonLink from '../../components/Button/ButtonLink';
import CircleButton from '../../components/Button/CircleButton';
import MultipleSlider from '../../components/Slider/MultipleSlider';

const Discover = () => {
  const [expand, setExpand] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Master>
      <Section className='white-background'>
        <div className='container'>
          <div className='center'>
            <Heading type={1} color='gray' text='Discover' />
            <p className='gray'>Discover, search and filter best events in London.</p>
          </div>
        </div>

        <div className='center'>
          {!expand ? (
            <button type='button' className='expand-button' onClick={() => setExpand(true)}>
              <i className='material-icons'>keyboard_arrow_down</i>
            </button>
          ) : (
            <>
              <div className='container'>
                <div className='top-search'>
                  <form className='form' noValidate onSubmit={handleSubmit}>
                    <div className='form-elements'>
                      <div className='form-line'>
                        <Input
                          type='text'
                          name='code'
                          value=''
                          maxLength={10}
                          placeholder='Event, venue, artist, keyword'
                          onChange={() => {}}
                          required
                        />
                      </div>
                      <div className='form-buttons'>
                        <Button
                          type='submit'
                          color='blue-filled'
                          text='Search events'
                          leftIcon='search'
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className='circle-buttons'>
                <MultipleSlider>
                  <CircleButton icon='theater_comedy' text='Theater' onClick='/discover' />
                  <CircleButton icon='stadium' text='Concert' onClick='/discover' />
                  <CircleButton icon='child_care' text='Kids' onClick='/discover' />
                  <CircleButton icon='sports_football' text='Sports' onClick='/discover' />
                  <CircleButton icon='attractions' text='Attractions' onClick='/discover' />
                </MultipleSlider>
              </div>
            </>
          )}

          {expand && (
            <button type='button' className='expand-button' onClick={() => setExpand(false)}>
              <i className='material-icons'>keyboard_arrow_up</i>
            </button>
          )}
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
      </Section>

      <Section className='white-background'>
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
      </Section>

      <Section>
        <div className='container'>
          <div className='title flex flex-v-center flex-space-between'>
            <Heading type={2} color='orange' text='Editors pick' />
            <ButtonLink
              color='orange-overlay'
              text='See all'
              rightIcon='arrow_forward'
              onClick='/discover'
            />
          </div>
        </div>

        <div className='carousel'>
          <MultipleSlider>
            <EventCard
              from='20'
              color='orange'
              when='Tue, Sep 21, 2024 19:00'
              name='Event name goes here'
              venue='Royal Albert Hall'
              image='https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <EventCard
              from='25'
              color='orange'
              when='Web, Aug 9, 2024 22:00'
              name='Event name goes here'
              venue='o2 Arena'
              image='https://images.unsplash.com/photo-1472691681358-fdf00a4bfcfe?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <EventCard
              from='10'
              color='orange'
              when='Sun, Mar 14, 2024 15:00'
              name='Event name goes here'
              venue='Wembley Stadium'
              image='https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <EventCard
              from='60'
              color='orange'
              when='Mon, Jul 2, 2024 20:00'
              name='Event name goes here'
              venue='Eventim Apollo'
              image='https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <EventCard
              from='20'
              color='orange'
              when='Tue, Sep 21, 2024 19:00'
              name='Event name goes here'
              venue='Royal Albert Hall'
              image='https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <EventCard
              from='25'
              color='orange'
              when='Web, Aug 9, 2024 22:00'
              name='Event name goes here'
              venue='o2 Arena'
              image='https://images.unsplash.com/photo-1472691681358-fdf00a4bfcfe?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
          </MultipleSlider>
        </div>
      </Section>

      <Section className='white-background'>
        <div className='container'>
          <div className='title flex flex-v-center flex-space-between'>
            <Heading type={2} color='purple' text='For kids' />
            <ButtonLink
              color='purple-overlay'
              text='See all'
              rightIcon='arrow_forward'
              onClick='/discover'
            />
          </div>
        </div>

        <div className='carousel'>
          <MultipleSlider>
            <EventCard
              from='20'
              color='purple'
              when='Tue, Sep 21, 2024 19:00'
              name='Event name goes here'
              venue='Royal Albert Hall'
              image='https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <EventCard
              from='25'
              color='purple'
              when='Web, Aug 9, 2024 22:00'
              name='Event name goes here'
              venue='o2 Arena'
              image='https://images.unsplash.com/photo-1472691681358-fdf00a4bfcfe?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <EventCard
              from='10'
              color='purple'
              when='Sun, Mar 14, 2024 15:00'
              name='Event name goes here'
              venue='Wembley Stadium'
              image='https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <EventCard
              from='60'
              color='purple'
              when='Mon, Jul 2, 2024 20:00'
              name='Event name goes here'
              venue='Eventim Apollo'
              image='https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <EventCard
              from='20'
              color='purple'
              when='Tue, Sep 21, 2024 19:00'
              name='Event name goes here'
              venue='Royal Albert Hall'
              image='https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <EventCard
              from='25'
              color='purple'
              when='Web, Aug 9, 2024 22:00'
              name='Event name goes here'
              venue='o2 Arena'
              image='https://images.unsplash.com/photo-1472691681358-fdf00a4bfcfe?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
          </MultipleSlider>
        </div>
      </Section>
    </Master>
  );
};

export default Discover;
