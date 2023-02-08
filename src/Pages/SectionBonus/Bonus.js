import React from 'react';
import MainButton from '../MainButton/MainButton';

const Bonus = () => {
    return (
        <section className='bonus'>
            <div className='container'>
                <div className='bonus__box'>
                    <h2 className='bonus__title title'>Pick Up Your Exclusive Free Bonus</h2>
                    <p className='bonus__text'>Get upgraded, hand-picked expertise on how to create and scale your online course. From naming and structuring to pricing and marketing. Claim it now!</p>
                    <p className='bonus__promotion'>Everyone who attends the full webinar will receive pricelessGuide For Online Course Creation for FREE</p>
                    <MainButton styleClass="btn bonus__box-btn"/>
                </div>
            </div>

        </section>

            
    
    );
};

export default Bonus;

