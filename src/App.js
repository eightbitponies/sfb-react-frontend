import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Home from './Home';

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const [activeUserId, setActiveUserId] = useState('');
  const [displayName, setDisplayName] = useState('');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        activeUserId !== '' ?
          <Home displayName={displayName} activeUserId={activeUserId} />
          :
          (
            currentForm === 'login' ?
              <Login setActiveUserId={setActiveUserId} displayName={displayName} setDisplayName={setDisplayName} toggleForm={toggleForm} />
              :
              <Register setActiveUserId={setActiveUserId} displayName={displayName} setDisplayName={setDisplayName} toggleForm={toggleForm}  />
          )
      }
    </div>
  )
}


export default App;