import React from 'react';

import Slider from '@components/Slider/Slider';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import ButtonLink from '@components/Button/ButtonLink';

interface IProps {
  url: string;
  title: string;
  color: string;
  background: string;
  children: React.ReactNode;
}

const CardGroup = ({ url, title, color, background, children }: IProps): React.JSX.Element => (
  <Section className={`${background}-background`}>
    <div className='container'>
      <div className='title flex flex-v-center flex-space-between'>
        <Heading type={2} color={color} text={title} />
        <ButtonLink
          color={`${color}-filled`}
          text='See all'
          rightIcon='arrow_forward'
          url={`${url}`}
        />
      </div>
    </div>
    <div className='carousel'>
      <Slider>{children}</Slider>
    </div>
  </Section>
);

export default CardGroup;
