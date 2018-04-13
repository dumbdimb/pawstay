import React from 'react';

const AboutPage = () => {
    return <div className='about page'>
        <div className='header'>hey, we are...</div>
        <div className='about__clarissa about__block'>
            <div className='about__clarissa__picture'/>
            <div className='about__text'>
                <div className='about__title'>clarissa</div>
                <div className='about__description'>Coming from a dog lover family, I have been taking care of dogs for my entire life. I believe that every dog has their own personality and I always try my best to understand their wants and needs. I am also a freelance copywriter and editor who works from home.</div>
            </div>
        </div>
        <div className='about__darby about__block'>
            <div className='about__darby__picture'/>
            <div className='about__text'>
                <div className='about__title'>darby</div>
                <div className='about__description'>A chocolate swirl beagle-basset hound mix. Darby has a sensitive soul and a big, loving heart. He loves to walk, sleep, chill on the sofa, and chase after squirrels. He is very calm and friendly towards other dogs, as well as children.</div>
            </div>
        </div>
    </div>;
}

export default AboutPage;