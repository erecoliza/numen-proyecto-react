import './App.css';

import Main from './components/main.js';
import Warning from './components/warning';
import Head from './components/Head';
import TellaFriend from './components/tellafriend';

function App() {
  return (    
    <div>      
      <Main />     
      <Warning />
      <Head />      
      <TellaFriend />
    </div>    
  );
}

export default App;
