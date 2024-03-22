import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Event from '../pages/Event/Event';
import Signin from '../pages/Members/Signin';
import Signup from '../pages/Members/Signup';
import Forgot from '../pages/Members/Forgot';

const Navigation = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/event' element={<Event />} />
    <Route path='/members/signin' element={<Signin />} />
    <Route path='/members/signup' element={<Signup />} />
    <Route path='/members/forgot-password' element={<Forgot />} />
  </Routes>
);

export default Navigation;
