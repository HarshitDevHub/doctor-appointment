import { useState } from 'react';
import './App.css';
import Start from './pages/Start';
import Welcome from './pages/Welcome';
import Appointment from './pages/Appointment';

function App() {
  const [count, setCount] = useState(0);
  const [isWelcomePageIsOpen, setIsWelcomePageIsOpen] = useState(false);
  const [isAppointmentPageIsOpen, setIsAppointmentPageIsOpen] = useState(false)

  return (
    <>
    {isWelcomePageIsOpen ? <Welcome setIsAppointmentPageIsOpen={setIsAppointmentPageIsOpen} setIsWelcomePageIsOpen={setIsWelcomePageIsOpen}/>:<Start setIsWelcomePageIsOpen={setIsWelcomePageIsOpen}/>}

    </>
  );
}

export default App;
