import React, { useState, useEffect } from 'react';
import './App.css';
import LoginIndex from './components/loginRegister/loginIndex.component';
import { getCurrentUser, deleteUserToken } from './utils/auth';
import MainApp from './components/mainApp.component';

function App() {
  const [user, setUser] = useState(false);

  function handleLogin(email) {
    setUser(email);
  }

  function handleLogout() {
    setUser(false);
    deleteUserToken();
  }

  useEffect(() => {
    const currentUser = getCurrentUser();

    if (currentUser) {
      setUser(currentUser.email);
    }
  }, [])

  return (
    <div>
      {user ? <MainApp handleLogout={handleLogout} /> : (<LoginIndex handleLogin={handleLogin} />)}
    </div>
  );
}

export default App;