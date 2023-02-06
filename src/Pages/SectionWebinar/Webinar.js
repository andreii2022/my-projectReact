import React, { useState } from 'react';
import CardWebinar from '../CardsWebinar/CardWebinar';
import icons from '../../images/sprites/sprite.svg'

function Webinar() {
	const [cards] = useState([
		{
			id: 1,
			icon: `${icons}#baks`,
			spanDesc: 'Turn your followers into paying customers',
			desc: 'without hassle and overworking 24/7.'
		},
		{
			id: 2,
			icon: `${icons}#squares`,
			spanDesc: 'Generate Sales around the clock',
			desc: 'with our top-notch scripts.'
		},
		{
			id: 3,
			icon: `${icons}#wallet`,
			spanDesc: 'Earn 6-figure',
			desc: 'with online courses, coaching sessions, fitness classes.'
		},
		{
			id: 4,
			icon: `${icons}#phone`,
			spanDesc: 'Launch Your Own App',
			desc: 'for IOS and Android in 7 days without coding'
		}
	])
	
    return (
      <section className='discover'>
				<div className="container">
					<p className="discover__subtitle">Let's discover more</p>
					<h2 className="discover__title">After This Webinar You Will Be Able To…</h2>

					<div className="discover__cards">
						{cards.map(card => 
							<CardWebinar card={card} key={card.id} styleClass="discover__card discover-card" />
						)}
					</div>

				</div>

      </section>
    );
};

export default Webinar;