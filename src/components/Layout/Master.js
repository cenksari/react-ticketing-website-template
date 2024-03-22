import { memo } from 'react';

import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Master = memo(({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
));

Master.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Master;
