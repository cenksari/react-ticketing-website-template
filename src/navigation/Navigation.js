import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Event from '../pages/Event/Event';
import Signin from '../pages/Members/Signin';
import Signup from '../pages/Members/Signup';
import Forgot from '../pages/Members/Forgot';

import Discover from '../pages/Discover/Discover';
import Venues from '../pages/Venue/Venues';

const Navigation = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/event' element={<Event />} />
    <Route path='/members/signin' element={<Signin />} />
    <Route path='/members/signup' element={<Signup />} />
    <Route path='/members/forgot-password' element={<Forgot />} />

    <Route path='/discover' element={<Discover />} />
    <Route path='/venues' element={<Venues />} />
  </Routes>
);

export default Navigation;
