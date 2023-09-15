import { useState, useEffect } from 'react';
import Splash from './screens/Splash';
import Login from './screens/Login';
import Home from './screens/Home'

const App = () => {
  const [exibeSplash, setExibeSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => setExibeSplash(false), 2000);
  }, []);
  return exibeSplash ? <Splash /> : <Home />;
};

export default App;
