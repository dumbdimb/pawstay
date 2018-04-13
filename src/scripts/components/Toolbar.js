import React from 'react';
import PropTypes from 'prop-types';

const Toolbar = (props) => {
    return <div className='toolbar'>
        <div className='toolbar__content'>
            <div className='toolbar__logo' onClick={e => {props.changePage('home')}}/>
            <div className='toolbar__menu-item' onClick={e => {props.changePage('about')}}>about us</div>
            <div className='toolbar__menu-item' onClick={e => {props.changePage('services')}}>our service</div>
            <div className='toolbar__menu-item' onClick={e => {props.changePage('contact')}}>contact us</div>
        </div>
    </div>;
}

Toolbar.propTypes = {
    changePage: PropTypes.func
}

export default Toolbar;