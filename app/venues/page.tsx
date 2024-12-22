import { type Metadata } from 'next';

// components
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import VenueCard from '@components/Card/VenueCard';
import CardGroup from '@components/Card/CardGroup';

import FormSearch from './components/FormSearch';

const Page: React.FC = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={1} color='gray' text='Venues' />
          <p className='gray'>Discover the best venues in London.</p>
          <div className='top-search'>
            <FormSearch />
          </div>
        </div>
      </div>
    </Section>

    <CardGroup url='venues' title='Latest venues' color='gray' background='gray'>
      <VenueCard
        url='1'
        color='gray'
        name='o2 Arena'
        location='Stratford, London'
        image='https://images.unsplash.com/photo-1667323567047-434d8bc4aca2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <VenueCard
        url='1'
        color='gray'
        name='Wembley Stadium'
        location='Wembley, London'
        image='https://images.unsplash.com/photo-1654111922009-74dbebd0a70f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <VenueCard
        url='1'
        color='gray'
        name='Eventim Apollo'
        location='Shepherds Bush, London'
        image='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <VenueCard
        url='1'
        color='gray'
        name='Somerset House'
        location='Hackney, London'
        image='https://images.unsplash.com/photo-1507901747481-84a4f64fda6d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <VenueCard
        url='1'
        color='gray'
        name='Royal Albert Hall'
        location='Hackney, London'
        image='https://images.unsplash.com/photo-1521334726092-b509a19597c6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <VenueCard
        url='1'
        color='gray'
        name='Kew Gardens'
        location='Brentford, London'
        image='https://images.unsplash.com/photo-1526041092449-209d556f7a32?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <VenueCard
        url='1'
        color='gray'
        name='Southbank Centre'
        location='Waterloo, London'
        image='https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
    </CardGroup>

    <CardGroup url='venues' title='Other venues' color='gray' background='white'>
      <VenueCard
        url='1'
        color='gray'
        name='o2 Arena'
        location='Stratford, London'
        image='https://images.unsplash.com/photo-1667323567047-434d8bc4aca2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <VenueCard
        url='1'
        color='gray'
        name='Wembley Stadium'
        location='Wembley, London'
        image='https://images.unsplash.com/photo-1654111922009-74dbebd0a70f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <VenueCard
        url='1'
        color='gray'
        name='Eventim Apollo'
        location='Shepherds Bush, London'
        image='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <VenueCard
        url='1'
        color='gray'
        name='Somerset House'
        location='Hackney, London'
        image='https://images.unsplash.com/photo-1507901747481-84a4f64fda6d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <VenueCard
        url='1'
        color='gray'
        name='Royal Albert Hall'
        location='Hackney, London'
        image='https://images.unsplash.com/photo-1521334726092-b509a19597c6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <VenueCard
        url='1'
        color='gray'
        name='Kew Gardens'
        location='Brentford, London'
        image='https://images.unsplash.com/photo-1526041092449-209d556f7a32?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <VenueCard
        url='1'
        color='gray'
        name='Southbank Centre'
        location='Waterloo, London'
        image='https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
    </CardGroup>
  </Master>
);

const title = 'Venues';
const canonical = 'https://modern-ticketing.com/venues';
const description = 'Modern ticketing is a modern ticketing solution';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'modern ticketing',
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    type: 'website',
    siteName: 'Modern Ticketing',
    images: 'https://modern-ticketing.com/logo192.png',
  },
};

export default Page;
