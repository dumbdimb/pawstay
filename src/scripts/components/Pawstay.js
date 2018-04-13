import React from 'react';

import Toolbar from './Toolbar';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

class Pawstay extends React.Component {
    constructor(props, context) {
        super (props, context);

        this.state = {
            currentPage: 'home'
        };

        this.changePage = this.changePage.bind(this);
    }

    changePage(toPage) {
        // 'about', 'services', 'contact';
        this.setState({
            currentPage: toPage
        });
    }

    displayedPage() {
        if (this.state.currentPage === 'about') {
            return <AboutPage/>;
        }
        return <HomePage/>;
    }

    render() {
        return <div className='root'>
            <Toolbar className='root__toolbar' changePage={this.changePage}/>
            {this.displayedPage()}
        </div>;
    }
}

export default Pawstay;