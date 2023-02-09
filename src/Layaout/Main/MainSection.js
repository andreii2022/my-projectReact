import React from 'react';
import ava from '../../images/ava.png'
import MainButton from '../../Pages/MainButton/MainButton'
import icons from '../../images/sprites/sprite.svg'

const MainSection = () => {
    return (

		<section className="hi">
			<div className="container">
				<div className="hi__grid">
					<div className="hi__image">
						<img src={ava} alt="ava"/>
					</div>
					<p className='hi__txt'>Unique training with	app & business pro Alex</p>
					<div className="hi__body">
						<h2 className="hi__title subtitle">What You’ll Learn</h2>
						<ul className="hi__list">
							<li>
							<svg>
								<use href={`${icons}#checkIcon`}></use>
							</svg>
								How To <span>Convert Your Followers</span> Into Loyal Clients
							</li>
							<li>
							<svg>
								<use href={`${icons}#checkIcon`}></use>
							</svg>
								How To <span>Earn $100k Monthly</span> With Your Branded App
							</li>
							<li>
							<svg>
								<use href={`${icons}#checkIcon`}></use>
							</svg>
								How To <span>Launch Your App</span> Quick, Easy, And Cheap
							</li>
						</ul>
					</div>
					<MainButton styleClass="btn hi__btn"/>
				</div>
			</div>
		</section>

		
    );
};

export default MainSection;

