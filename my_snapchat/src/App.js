import React, { useState, useEffect } from 'react';
import './App.css';
import LoginIndex from './components/loginRegister/loginIndex.component';
import { getCurrentUser } from './utils/auth';

function App() {
  const [user, setUser] = useState(false);

  function handleLogin(email) {
    setUser(email);
  }

  useEffect(() => {
    const currentUser = getCurrentUser();

    if (currentUser) {
      setUser(currentUser.email);
    }
  }, [])

  return (
    <div>
      {user ? (<h1>Logged in</h1>) : (<LoginIndex handleLogin={handleLogin} />)}
    </div>
  );
}

export default App;