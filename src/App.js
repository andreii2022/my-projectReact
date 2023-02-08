import React from 'react';
import Header from './Layaout/Header/Header';
import MainSection from './Layaout/Main/MainSection';
import Webinar from './Pages/SectionWebinar/Webinar';
import Meet from './Pages/Meet/Meet';
import Bonus from './Pages/SectionBonus/Bonus';
import Spots from './Pages/Spots/Spots';
import Catch from './Pages/Catch/Catch';
import Footer from './Layaout/Footer/Footer';
import './App.scss';

const App = () => {
  return (
    <div>
      <Header/>
      
      <main>
        <MainSection />
				<Webinar />
				<Meet />
        <Bonus/>
        <Spots />
        <Catch />
      </main>
      
      <Footer/>
    </div>
  );
};

export default App;
