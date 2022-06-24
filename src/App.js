import './App.css';
import Main from './components/main.js';
import Warning from './components/warning';
import Head from './components/head';
import Banner from './components/banner';
import Instagram from './components/Instagram';
import TellaFriend from './components/tellafriend';

function App() {
  return (       
    <div>            
      <Main />     
      <Warning />
      <Head />     
      <Banner />  
      <Instagram />  
      <TellaFriend />
    </div>    
  );
}

export default App;
