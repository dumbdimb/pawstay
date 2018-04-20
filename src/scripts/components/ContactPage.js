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
        return <div className='page'>
            <div className='contact__preheader'>even though this is a dog boarding and daycare website,</div>
            <div className='contact__header'>talk to a human</div>
            <div className='contact__subheader'>
                Want to ask for spot availability or make a meet and greet appointment?<br/>
                Fill out this form below and we will get back to you soon!
            </div>
            <div className='contact-form'>
                <div className='contact-form__left'>
                    <input type='text' className='contact-form__field' name='ownerName' placeholder='*Name of the dog owner' onChange={this.changeFormState}/>
                    <input type='text' className='contact-form__field' name='dogName' placeholder='*Name of the furbaby' onChange={this.changeFormState}/>
                    <input type='text' className='contact-form__field' name='ownerEmail' placeholder='*Dog owner&apos;s email address' onChange={this.changeFormState}/>
                    <input type='text' className='contact-form__field' name='subject' placeholder='*What&apos;s the message about' onChange={this.changeFormState}/>
                </div>
                <div className='contact-form__right'>
                    <textarea className='contact-form__field contact-form__field--body' name='body' placeholder='*Your message' onChange={this.changeFormState}/>
                    <div className='contact-form__submit' onClick={this.sendEmail}>send message</div>
                </div>
            </div>
            <div className='contact__location'>
                <div className='contact__location__pin-icon'/>
                <div className='contact__location__right'>
                    <div className='contact__location__info'>Palatine, IL</div>
                    <div className='contact__location__info'>USA</div>
                </div>
            </div>
        </div>;
    }
}

export default ContactPage;