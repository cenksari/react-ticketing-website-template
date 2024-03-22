import { memo } from 'react';

import PropTypes from 'prop-types';

const Switch = memo(({ name, checked, color, children }) => (
  <div className='switch-container'>
    <label className={`switch ${color}`}>
      <input name={name} type='checkbox' defaultChecked={checked} />
      <span className='slider round' />
    </label>
    {children && <span className='switch-description'>{children}</span>}
  </div>
));

Switch.defaultProps = {
  checked: false,
  children: null,
};

Switch.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node,
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Switch;
