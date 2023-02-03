import React from 'react';
import ava from '../../images/ava.png'
import MainButton from '../../Pages/MainButton/MainButton'

const Main = () => {
    return (
       <main className='page'>

<div class="hi">
					<div className = "container">
						<div className ="hi__row">
						<div className="hi__image">
							<img src={ava} alt="ava "/>
								<p>Unique training with
								app & business pro Alex</p>
						</div> 
							<div className = "hi__body">
							<div className = "hi__title">What You’ll Learn</div>
							<ul className = "hi__list">
								<li>How To Convert Your Followers Into Loyal Clients</li>
								<li>How To Earn $100k Monthly With Your Branded App</li>
								<li>How To Launch Your App Quick, Easy, And Cheap</li>
							</ul>
							<MainButton styleClass="btn"/>
						</div>
						
						</div>
					</div>
					</div>



        {/* <div className='hello'>
            <div className='hello__container'>
                <div className='hello__content'>
                    <h2 className='hello__title'>What You’ll Learn</h2>
                       
						<ul className='hello__list'>
							<li>How To Convert Your Followers Into Loyal Clients</li>
							<li>How To Earn $100k Monthly With Your Branded App</li>
							<li>How To Launch Your App Quick, Easy, And Cheap</li>
						</ul>	
						
                    </div>
                </div>
                <MainButton styleClass="btn"/>
                <div className='hello__avatar'>
                    <img src={ava} alt="ava" />
					<div className='hello__text'>
								<p>Unique training with
								app & business pro Alex</p>
					</div>
                </div>
            </div> */}
        
       </main>
    );
};

export default Main;







{/* <div class="wrapper">
			<div class="content">
				<div class="hi">
					<div class="container">
						<div class="hi__row">
							<div class="hi__body">
							<div class="hi__title">Привет, друг!</div>
							<ul class="hi__list">
								<li>У тебя все получится!</li>
								<li>Никогда не сдавайся!</li>
								<li>Сегодня ты уже знаешь больше чем вчера!</li>
								<li>Спасибо тебе за поддержку!</li>
							</ul>
						</div>
						
					
						<div class="hi__image">
							<img src="/flex/img/image.jpg" alt="">
						</div>
						</div>
					</div>
					</div> */}