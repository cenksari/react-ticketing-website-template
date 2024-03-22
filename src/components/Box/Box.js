import { memo } from 'react';

import PropTypes from 'prop-types';

const Box = memo(({ children, className }) => (
  <div className={className ? `box ${className}` : 'box'}>
    <div className='box-inner'>{children}</div>
  </div>
));

Box.defaultProps = {
  className: null,
};

Box.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Box;
