import React from 'react';
import MainButton from '../../Pages/MainButton/MainButton';
import avatar from '../../images/Avatar.jpg'
import iconOne from '../../images/iconOne.svg'
import iconTwo from '../../images/iconTwo.svg'

const Header = () => {
    return (
        
    <header className='header'>
        <div className="container">
            <div className="header__box">
                <p className='header__free'>Free Webclass Reveals How To...</p>
                <h1 className='header__title'>Create Your OWN App And Unlock Your Freedom</h1>
                <p className='header__txt'>‘How Creators, Coaches And Teachers Are Getting A 6-figure Income’</p>
            </div>
            <MainButton styleClass="btn"/>

            <div className="header__video">
                <button className="header__play"></button>
            </div>
            <div className="header__post">
                <img src={avatar} alt="avatar" />
                <h2 className='header__text'>100% Free Webinar From Trible Founder Alex</h2>
                <img className='header__icone1' src={iconOne} alt="iconOne" />
                <span className='header__text1' >On Demand</span>
                <img className='header__icone2' src={iconTwo} alt="iconTwo" />
                <span className='header__text2'>45+ Minutes</span>

            </div>
        </div>
    </header>       
    
    );
};

export default Header;