import { memo } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const ButtonLink = memo(({ text, leftIcon, rightIcon, color, onClick }) => (
  <Link className={`button ${color}`} to={onClick}>
    {leftIcon && <i className='material-icons left-icon'>{leftIcon}</i>}
    {text}
    {rightIcon && <i className='material-icons right-icon'>{rightIcon}</i>}
  </Link>
));

ButtonLink.defaultProps = {
  leftIcon: null,
  rightIcon: null,
};

ButtonLink.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  onClick: PropTypes.string.isRequired,
};

export default ButtonLink;
