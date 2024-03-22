import { memo } from 'react';

import PropTypes from 'prop-types';

const MultipleSlider = memo(({ children }) => <div className='carousel'>{children}</div>);

MultipleSlider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MultipleSlider;
