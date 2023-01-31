import Header from './Layaout/Header/Header';
import Footer from './Layaout/Footer/Footer';
import Main from './Pages/Main';
import React from 'react';
import './Main.scss';

const App = () => {
  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
};

export default App;
