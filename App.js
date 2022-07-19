import Form from './components/Form'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Profile from './components/Profile'
import About from './components/About'
import Interest from './components/Interest'
import Social from './components/Social'

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App justify-content-center">

      <main className='col-md-4'>
        <Profile toggle={toggle} setToggle={setToggle} />
        <About />
        <Interest /> 
        <Social toggle={toggle} />  
      </main>
          
      <Form />
    
    </div>
  );
}

export default App;
