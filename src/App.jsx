import { useState } from 'react';
import './App.css';
import Start from './pages/Start';
import Welcome from './pages/Welcome';
import Appointment from './pages/Appointment';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';

function App() {
  const [count, setCount] = useState(0);
  const [isWelcomePageIsOpen, setIsWelcomePageIsOpen] = useState(false);
  const [isAppointmentPageIsOpen, setIsAppointmentPageIsOpen] = useState(false)

  return (
    <>
    <Toaster/>
    <Router>
      <Routes>

        <Route path={'/'} element={isWelcomePageIsOpen ? <Welcome setIsAppointmentPageIsOpen={setIsAppointmentPageIsOpen} setIsWelcomePageIsOpen={setIsWelcomePageIsOpen}/>:<Start setIsWelcomePageIsOpen={setIsWelcomePageIsOpen}/>}/>

        <Route path='/admin' element={<Admin/>}/>
        <Route path='*' element={<NotFound/>}/>

      </Routes>
    </Router>
    
    </>
  );
}

export default App;
