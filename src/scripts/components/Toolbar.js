import React from 'react';

const Toolbar = () => {
    return <div className='toolbar'>
        <div className='toolbar__content'>
            <div className='toolbar__logo'/>
            <div className='toolbar__menu-item'>about us</div>
            <div className='toolbar__menu-item'>our service</div>
            <div className='toolbar__menu-item'>contact us</div>
        </div>
    </div>;
}

export default Toolbar;