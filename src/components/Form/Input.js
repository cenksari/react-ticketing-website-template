import { memo } from 'react';

import PropTypes from 'prop-types';

const Input = memo(({ name, type, value, placeholder, onChange, maxLength, disabled }) => (
  <input
    id={name}
    type={type}
    name={name}
    value={value}
    readOnly={disabled}
    disabled={disabled}
    placeholder={placeholder}
    maxLength={maxLength}
    onChange={onChange}
    autoComplete='off'
    className='input-text'
  />
));

Input.defaultProps = {
  value: '',
  disabled: false,
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  maxLength: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
};

export default Input;