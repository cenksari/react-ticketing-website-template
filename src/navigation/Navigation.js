import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Event from '../pages/Event/Event';
import Signin from '../pages/Members/Signin';
import Signup from '../pages/Members/Signup';
import Forgot from '../pages/Members/Forgot';
import Reset from '../pages/Members/Reset';

import Discover from '../pages/Discover/Discover';
import Venues from '../pages/Venue/Venues';
import News from '../pages/News/News';
import Contact from '../pages/Contact/Contact';
import Help from '../pages/Help/Help';
import Promoters from '../pages/Promoters/Promoters';

const Navigation = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/event' element={<Event />} />
    <Route path='/members/signin' element={<Signin />} />
    <Route path='/members/signup' element={<Signup />} />
    <Route path='/members/forgot-password' element={<Forgot />} />
    <Route path='/members/reset-password' element={<Reset />} />

    <Route path='/discover' element={<Discover />} />
    <Route path='/venues' element={<Venues />} />
    <Route path='/news' element={<News />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/help' element={<Help />} />
    <Route path='/promoters' element={<Promoters />} />
  </Routes>
);

export default Navigation;
