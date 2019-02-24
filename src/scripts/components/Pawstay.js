import React from 'react';

import Toolbar from './Toolbar';
import HomePage from './HomePage';
import ServicePage from './ServicePage';
import ContactPage from './ContactPage';

class Pawstay extends React.Component {
    constructor(props, context) {
        super (props, context);

        this.state = {
            currentPage: 'home'
        };

        this.changePage = this.changePage.bind(this);
    }

    changePage(toPage) {
        this.setState({
            currentPage: toPage
        });
    }

    displayedPage() {
        if (this.state.currentPage === 'services') {
            return <ServicePage/>
        } else if (this.state.currentPage === 'contact') {
            return <ContactPage/>
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