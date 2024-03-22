import { memo } from 'react';

import PropTypes from 'prop-types';

const Button = memo(({ type, text, leftIcon, rightIcon, color, onClick }) => (
  <button type={type === 'button' ? 'button' : 'submit'} className={color} onClick={onClick}>
    {leftIcon && <i className='material-icons left-icon'>{leftIcon}</i>}
    {text}
    {rightIcon && <i className='material-icons right-icon'>{rightIcon}</i>}
  </button>
));

Button.defaultProps = {
  type: 'button',
  leftIcon: null,
  rightIcon: null,
  onClick: () => {},
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
