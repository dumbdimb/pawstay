import React from 'react';

const ServicePage = () => {
    return <div className='page'>
        <div className='header'>we do</div>
        <div className='service__block service__block--boarding'>
            <div className='service__picture service__picture--boarding'/>
            <div className='service__text'>
                <div className='service__title'>boarding</div>
                <div className='service__description'>
                    Going to travel or be away for a night?<br/>
                    Why put your furbaby at a kennel where they might be left unsupervised?<br/>
                    Let your dog stay a night (or more!) at our warm home where he or she will be treated as a family member with all of the love, care, and attention they deserve!<br/>
                    Not only your dog will have runs or walks, your dog will also get unlimited cuddles and kisses, as well as a new buddy, Darby.<br/>
                    And, if there are big thunderstorms or fireworks, we will make sure that your furbaby feels safe.
                </div>
            </div>
        </div>
        <div className='service__block service__block--daycare'>
            <div className='service__picture service__picture--daycare'/>
            <div className='service__text'>
                <div className='service__title'>daycare</div>
                <div className='service__description'>
                    Planning to have a night out after work or worried that your furbaby will feel lonely when you're away?<br/>
                    Let your dog spend his or her day out our home!<br/>
                    Full of toys and accompanied by Darby, our home also offers flexible pick up and drop off time.<br/>
                    Your dog will have the exercise that they need as well as unlimited cuddles and kisses!
                </div>
            </div>
        </div>
    </div>;
}

export default ServicePage;