import { memo } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const CircleButton = memo(({ icon, text, onClick }) => (
  <Link className='circle-button' to={onClick}>
    <div className='circle'>
      <i className='material-icons right-icon'>{icon}</i>
    </div>
    <span>{text}</span>
  </Link>
));

CircleButton.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.string.isRequired,
};

export default CircleButton;
