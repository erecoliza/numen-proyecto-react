import logo from './logo.svg';
import './App.css';
import Warning from './components/warning';
import TellaFriend from './components/TellaFriend';
import Head from './components/Head';
import Banner from './components/Banner';

function App() {
  return (
    <>
      <div className='Warning'>
        <Warning />
      </div>
      <div className='Head'>
        <Head />
      </div>
      <div className='Banner'>
        <Banner />
      </div>
      <div className='TellaFriend'>
        <TellaFriend />
      </div>
    </>
  );
}

export default App;
