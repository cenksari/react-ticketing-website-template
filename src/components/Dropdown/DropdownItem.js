import { memo } from 'react';

import PropTypes from 'prop-types';

const DropdownItem = memo(({ text, active, onClick }) => (
  <button type='button' className={active ? 'active' : 'passive'} onClick={onClick}>
    {text}
  </button>
));

DropdownItem.defaultProps = {
  active: false,
  onClick: () => {},
};

DropdownItem.propTypes = {
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default DropdownItem;
