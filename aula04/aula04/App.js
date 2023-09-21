import { useState, useEffect } from 'react';
import Splash from './screens/Splash';
import Login from './screens/Login';
import Home from './screens/Home';

const App = () => {
  const [exibeSplash, setExibeSplash] = useState(true);
  const [logado, setLogado] = useState(false);

  const handleLogin = () => {
    setLogado(true);
  };
  const handleLogout = () => {
    setLogado(false);
  };

  useEffect(() => {
    setTimeout(() => setExibeSplash(false), 2000);
  }, []);
  return exibeSplash ? (
    <Splash />
  ) : logado ? (
    <Home onLogout={handleLogout} />
  ) : (
    <Login onLogin={handleLogin} />
  );
};

export default App;
