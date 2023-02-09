import React, { useState, useRef } from 'react';
import MainButton from '../../Pages/MainButton/MainButton';
import avatar from '../../images/Avatar.jpg'
import icons from '../../images/sprites/sprite.svg'

const Header = () => {
    const [isPlaying, setIsPlaying] = useState(false);
		const videoRef = useRef(null);

		const togglePlay = () => {
			if (isPlaying) {
				videoRef.current.pause();
				} else {
				videoRef.current.play();
			}
			setIsPlaying(!isPlaying);
		}
    return (
    <header className='header'>
        <div className="container">
            <div className="header__box">
                <p className='header__free'>Free Webclass Reveals How To...</p>
                <h1 className='header__title title'>Create Your OWN App And Unlock Your Freedom</h1>
                <p className='header__txt'>‘How Creators, Coaches And Teachers Are Getting A 6-figure Income’</p>
            </div>
            <MainButton styleClass="btn header__btn" />

            <div className="header__video">
            <video width="100%" height="100%" ref={videoRef} controls>
							<source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
						</video>
                <button className={isPlaying ? 'header__play' : 'header__play pause'} onClick={togglePlay}></button>
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