import Header from './Layaout/Header/Header';
import Footer from './Layaout/Footer/Footer';
import Main from './Layaout/Main/Main';
import React from 'react';
import './App.scss';

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
