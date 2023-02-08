import React from 'react';
import speaker from '../../images/speaker.png'
import MainButton from '../MainButton/MainButton';

const Meet = () => {
  return (
    <section className='meet'>
      <div className='container'>
        <div className='meet__body'>
          <div className='meet__title'>Meet the speaker</div>
           <div className='meet__wrapper'>
            <div className='meet_text'>
               <p>Alex is one of those young people who made it. He has years of expertise when it comes to business. When
                  he was only 19, he became a brand manager at a big international company.
              </p>
               <p>
                  As of today, Alex invested in 30+ startups and advised more than 100 founders.
                  He created his own businesses from scratch and led them to financial and reputational success.
              </p>
               <p>
                 Alex is passionate about helping coaches and creators in building their own businesses. In this Webinar, he will share his inner expertise and entrepreneurs' secrets
                 for you to achieve your dreams.
            </p>
           </div>
              <div className='image'>
                 <img src={speaker} alt="speaker" />
              </div>
              <MainButton styleClass="btn hi__btn"/>
          <p className='meet__lower-text'>100% free webinar for Coaches and Creators</p>
           </div>
        </div>
       
      </div>


		
    </section>
  );
};

export default Meet;






	{/* <div className="container">
        <div className='meet__row'>
          <div className='meet__image'></div>
            <img src={speaker} alt="speaker" />
            
            </div>   
              <p className='meet__lower-text'>100% free webinar for Coaches and Creators</p>
          
          <MainButton styleClass="btn hi__btn"/>

          <div className='meet__text'>
           <p>Alex is one of those young people who made it. He has years of expertise when it comes to business. When
               he was only 19, he became a brand manager at a big international company.
          </p>
           <p>
            As of today, Alex invested in 30+ startups and advised more than 100 founders.
            He created his own businesses from scratch and led them to financial and reputational success.
          </p>
           <p>
           Alex is passionate about helping coaches and creators in building their own businesses. In this Webinar,
            he will share his inner expertise and entrepreneurs' secrets
           for you to achieve your dreams.
         </p>
       </div>
			</div> */}