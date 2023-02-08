import React from 'react';
import Header from './Layaout/Header/Header';
import Footer from './Layaout/Footer/Footer';
import MainSection from './Layaout/Main/MainSection';
import Webinar from './Pages/SectionWebinar/Webinar';
import Meet from './Pages/Meet/Meet';
import Bonus from './Pages/SectionBonus/Bonus';
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
      </main>
      
      <Footer/>
    </div>
  );
};

export default App;
