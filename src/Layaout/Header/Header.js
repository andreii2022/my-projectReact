import React from 'react';
import MainButton from '../../Pages/MainButton/MainButton';
import avatar from '../../images/Avatar.jpg'
import icons from '../../images/sprites/sprite.svg'
// import { ReactComponent as IconOne } from "../../images/iconOne.svg";

const Header = () => {
    return (
    <header className='header'>
        <div className="container">
            <div className="header__box">
                <p className='header__free'>Free Webclass Reveals How To...</p>
                <h1 className='header__title title'>Create Your OWN App And Unlock Your Freedom</h1>
                <p className='header__txt'>‘How Creators, Coaches And Teachers Are Getting A 6-figure Income’</p>
            </div>
            <MainButton styleClass="btn header__btn"/>

            <div className="header__video">
                <button className="header__play"></button>
            </div>
            <div className="header__post">
                <div className="header__post-inner">
                    <img src={avatar} alt="avatar" />
                    <h3 className='header__post-title'>100% Free Webinar From Trible Founder Alex</h3>
                </div>
                <div className="header__post-footer">
                    <div className="header__post-box">
                        {/* <IconOne></IconOne> */}
                        <svg>
                            <use href={`${icons}#iconWindow`}></use>
                        </svg>
                        <span className='header__post-text'>On Demand</span>
                    </div>

                    <div className="header__post-box">
                        <svg>
                            <use href={`${icons}#iconWatch`}></use>
                        </svg>
                        <span className='header__post-text'>45+ Minutes</span>
                    </div>
                </div>
            </div>
        </div>
    </header>       

    
    
    );
};

export default Header;