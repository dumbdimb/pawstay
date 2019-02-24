import React from 'react';

const ServicePage = () => {
    return <div>
        <div className='header'>Our Services</div>
        <div className='service__block'>
            <div className='service__picture service__picture--boarding'/>
            <div className='service__text'>
                <div className='service__title'>Boarding</div>
                <div className='service__subtitle'>&nbsp;- starts from $25/night</div>
                <div className='service__description'>The best solution for your fur baby when you’re traveling or away for a night! Other than having walks or runs, your dog will also have a great time playing along with cuddles and kisses. We provide clean dog bowls and beds for a more comfortable eating and sleeping setting. You will also receive updates with pictures of your dog at least twice a day.</div>
            </div>
        </div>
        <div className='service__block'>
            <div className='service__picture service__picture--daycare'/>
            <div className='service__text'>
                <div className='service__title'>Daycare</div>
                <div className='service__subtitle'>&nbsp;- starts from $20/day (up to 12 hours)</div>
                <div className='service__description'>Worry not about your dog who has to spend a day alone! Let your dog come to our place, where it’s filled with toys and fun. Your dog will have walks or runs and a great time playing. Your dog’s day recap with pictures will be sent to you at the end of the stay.</div>
            </div>
        </div>
        <div className='service__disclaimer'>
            <span>Note:&nbsp;</span>
            <span>to ensure the dog’s comfort and safety, we only accept&nbsp;</span>
            <span>up to 2 dogs per day, based on size, breed, age, and personality.</span></div>
        <div className='service__footer'/>
    </div>;
}

export default ServicePage;