import { memo } from 'react';

import PropTypes from 'prop-types';

const ButtonGroup = memo(({ color, children }) => (
  <div className={`button-group ${color}`}>{children}</div>
));

ButtonGroup.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ButtonGroup;
