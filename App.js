import Form from './components/Form'
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Profile from './components/Profile'
import About from './components/About'
import Interest from './components/Interest'

function App() {

  return (
    <div className="App justify-content-center">

      <main className='col-md-4'>
        <Profile />
        <About />
        <Interest /> 
      </main>
          
      <Form />
    
    </div>
  );
}

export default App;
