import React from 'react';
import MainButton from '../MainButton/MainButton';

const Catch = () => {
    return (
        <section className='catch'>
           <div className="container">
                <h2 className="catch__title subtitle">What's the catch?</h2>
                <div className="catch__box">
                    <div className="catch__text">
                        <p>There is no catch. This webinar is created by real people who have launched the very real products. We want you to upgrade your business. And that’s why at the end of the Webinar I will include a special discounted offer available for every participant. The Webinar is 100% free, without any hidden fees, obligations, and other headaches.</p>
                    </div>
                    <div className="catch__button">
                        <MainButton styleClass="btn catch__button-btn" />
                    </div>
                </div>
            </div> 
        </section>
    );
};

export default Catch;