import { memo } from 'react';

import PropTypes from 'prop-types';

const Badge = memo(({ text, color }) => <span className={`badge ${color}`}>{text}</span>);

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Badge;
