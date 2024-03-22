import { memo } from 'react';

import PropTypes from 'prop-types';

const Section = memo(({ children, className }) => (
  <section className={className ? `section ${className}` : 'section'}>{children}</section>
));

Section.defaultProps = {
  className: null,
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Section;
