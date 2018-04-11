import React from 'react';

import Toolbar from './Toolbar';
import HomePage from './HomePage';

class Pawstay extends React.Component {
    constructor(props, context) {
        super (props, context);

        this.state = {
            currentPage: 'home'
        };
    }

    displayedPage() {
        return <HomePage/>;
    }

    render() {
        return <div className='root'>
            <Toolbar/>
            {this.displayedPage()}
        </div>;
    }
}

export default Pawstay;