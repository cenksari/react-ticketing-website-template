import ReactGA from 'react-ga4';

const init = () => {
  const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

  ReactGA.initialize('GOOGLE ANALYTICS PROPERY ID', { debug: isDev });
};

const sendEvent = (payload) => {
  ReactGA.event(payload);
};

const sendPageview = (path) => {
  ReactGA.set({ page: path });
  ReactGA.send('pageview', path);
};

const Analytics = {
  init,
  sendEvent,
  sendPageview,
};

export default Analytics;
