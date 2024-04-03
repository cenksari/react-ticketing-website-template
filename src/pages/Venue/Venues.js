import { useState } from 'react';

import Input from '../../components/Form/Input';
import Button from '../../components/Button/Button';
import Master from '../../components/Layout/Master';
import Section from '../../components/Section/Section';
import Heading from '../../components/Heading/Heading';
import VenueCard from '../../components/Card/VenueCard';
import ButtonLink from '../../components/Button/ButtonLink';
import MultipleSlider from '../../components/Slider/MultipleSlider';

const Venues = () => {
  const [expand, setExpand] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Master>
      <Section className='white-background'>
        <div className='container'>
          <div className='center'>
            <Heading type={1} color='gray' text='Venues' />
            <p className='gray'>Discover the best venues in London.</p>

            {!expand ? (
              <button type='button' className='expand-button' onClick={() => setExpand(true)}>
                <i className='material-symbols-outlined'>keyboard_arrow_down</i>
              </button>
            ) : (
              <div className='top-search'>
                <form className='form' noValidate onSubmit={handleSubmit}>
                  <div className='form-elements'>
                    <div className='form-line'>
                      <Input
                        type='text'
                        name='code'
                        value=''
                        maxLength={10}
                        placeholder='Venue name, keyword, location'
                        onChange={() => {}}
                        required
                      />
                    </div>
                    <div className='form-buttons'>
                      <Button
                        type='submit'
                        color='blue-filled'
                        text='Search venues'
                        leftIcon='search'
                      />
                    </div>
                  </div>
                </form>
              </div>
            )}

            {expand && (
              <button type='button' className='expand-button' onClick={() => setExpand(false)}>
                <i className='material-symbols-outlined'>keyboard_arrow_up</i>
              </button>
            )}
          </div>
        </div>
      </Section>

      <Section>
        <div className='container'>
          <div className='title flex flex-v-center flex-space-between'>
            <Heading type={2} color='gray' text='Latest venues' />
            <ButtonLink
              color='gray-overlay'
              text='See all'
              rightIcon='arrow_forward'
              onClick='/discover'
            />
          </div>
        </div>

        <div className='carousel'>
          <MultipleSlider>
            <VenueCard
              color='gray'
              name='o2 Arena'
              location='Stratford, London'
              image='https://images.unsplash.com/photo-1667323567047-434d8bc4aca2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <VenueCard
              color='gray'
              name='Wembley Stadium'
              location='Wembley, London'
              image='https://images.unsplash.com/photo-1654111922009-74dbebd0a70f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <VenueCard
              color='gray'
              name='Eventim Apollo'
              location='Shepherds Bush, London'
              image='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <VenueCard
              color='gray'
              name='Somerset House'
              location='Hackney, London'
              image='https://images.unsplash.com/photo-1507901747481-84a4f64fda6d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <VenueCard
              color='gray'
              name='Royal Albert Hall'
              location='Hackney, London'
              image='https://images.unsplash.com/photo-1521334726092-b509a19597c6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <VenueCard
              color='gray'
              name='Kew Gardens'
              location='Brentford, London'
              image='https://images.unsplash.com/photo-1526041092449-209d556f7a32?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <VenueCard
              color='gray'
              name='Southbank Centre'
              location='Waterloo, London'
              image='https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
          </MultipleSlider>
        </div>
      </Section>

      <Section className='white-background'>
        <div className='container'>
          <div className='title flex flex-v-center flex-space-between'>
            <Heading type={2} color='gray' text='Best venues' />
            <ButtonLink
              color='gray-overlay'
              text='See all'
              rightIcon='arrow_forward'
              onClick='/discover'
            />
          </div>
        </div>

        <div className='carousel'>
          <MultipleSlider>
            <VenueCard
              color='gray'
              name='o2 Arena'
              location='Stratford, London'
              image='https://images.unsplash.com/photo-1667323567047-434d8bc4aca2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <VenueCard
              color='gray'
              name='Wembley Stadium'
              location='Wembley, London'
              image='https://images.unsplash.com/photo-1654111922009-74dbebd0a70f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <VenueCard
              color='gray'
              name='Eventim Apollo'
              location='Shepherds Bush, London'
              image='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <VenueCard
              color='gray'
              name='Somerset House'
              location='Hackney, London'
              image='https://images.unsplash.com/photo-1507901747481-84a4f64fda6d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <VenueCard
              color='gray'
              name='Royal Albert Hall'
              location='Hackney, London'
              image='https://images.unsplash.com/photo-1521334726092-b509a19597c6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <VenueCard
              color='gray'
              name='Kew Gardens'
              location='Brentford, London'
              image='https://images.unsplash.com/photo-1526041092449-209d556f7a32?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <VenueCard
              color='gray'
              name='Southbank Centre'
              location='Waterloo, London'
              image='https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
          </MultipleSlider>
        </div>
      </Section>
    </Master>
  );
};

export default Venues;
