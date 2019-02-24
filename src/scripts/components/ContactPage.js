import React from 'react';

import GoogleMailApiClient from '../email/GoogleMailApiClient';

class ContactPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            ownerName: '',
            dogName: '',
            ownerEmail: '',
            subject: '',
            body: ''
        }

        this.changeFormState = this.changeFormState.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
    }
    
    changeFormState(event) {
        const state = this.state;
        state[event.target.name] = event.target.value;
        this.setState(state);
    }

    sendEmail() {
        GoogleMailApiClient.sendMessage(this.state.ownerName, this.state.dogName, this.state.ownerEmail, this.state.subject, this.state.body);
    }

    render() {
        return <div className='contact-page'>
            <div className='contact__header'>Contact Us</div>
            <div className='contact__subheader'>
                <div>to ask about spot availability</div><div>&nbsp;or make a meet and greet appointment!</div>
            </div>
            <div className='contact-form'>
                <input type='text' className='contact-form__field' name='ownerName' placeholder='*Name of the dog owner' onChange={this.changeFormState}/>
                <input type='text' className='contact-form__field' name='dogName' placeholder='*Name of the dog' onChange={this.changeFormState}/>
                <input type='text' className='contact-form__field' name='ownerEmail' placeholder='*Dog owner&apos;s email address' onChange={this.changeFormState}/>
                <input type='text' className='contact-form__field' name='ownerPhone' placeholder='*Dog owner&apos;s phone number' onChange={this.changeFormState}/>
                <textarea className='contact-form__field contact-form__field--body' name='body' placeholder='*Your message' onChange={this.changeFormState}/>
                <div className='contact-form__submit' onClick={this.sendEmail}>send message</div>
            </div>
            <div className='paw paw-left'/>
            <div className='paw paw-right'/>
        </div>;
    }
}

export default ContactPage;