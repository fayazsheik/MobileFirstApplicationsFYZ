
import React, { useState } from 'react';

import Login from './components/Login/login';
import Table from './components/Table/table';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {isLoggedIn ? <Table /> : <Login onLogin={handleLogin} />}
     
    </>

    
  
  );
};

export default App;



