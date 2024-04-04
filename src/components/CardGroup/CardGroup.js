import { memo } from 'react';

import PropTypes from 'prop-types';

import Section from '../Section/Section';
import Heading from '../Heading/Heading';
import ButtonLink from '../Button/ButtonLink';
import MultipleSlider from '../Slider/MultipleSlider';

const CardGroup = memo(({ title, color, link, background, children }) => (
  <Section className={`${background}-background`}>
    <div className='container'>
      <div className='title flex flex-v-center flex-space-between'>
        <Heading type={2} color={color} text={title} />
        <ButtonLink
          color={`${color}-overlay`}
          text='See all'
          rightIcon='arrow_forward'
          onClick={link}
        />
      </div>
    </div>

    <div className='carousel'>
      <MultipleSlider>{children}</MultipleSlider>
    </div>
  </Section>
));

CardGroup.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  background: PropTypes.string.isRequired,
};

export default CardGroup;
