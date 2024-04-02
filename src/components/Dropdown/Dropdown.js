import { memo } from 'react';

import PropTypes from 'prop-types';

const Dropdown = memo(({ color, children }) => (
  <div className={`dropdown ${color}`}>{children}</div>
));

Dropdown.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Dropdown;
