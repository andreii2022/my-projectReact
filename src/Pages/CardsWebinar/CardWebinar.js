import React from 'react';

const CardWebinar = (props) => {
  return (
    <div className={props.styleClass}>
			<svg className='discover-card__icon'>
				<use href={`${props.card.icon}`}></use>
			</svg>
			<p className='discover-card__desc'><span>{props.card.spanDesc}</span> {props.card.desc}</p>
    </div>
  );
};

export default CardWebinar;
