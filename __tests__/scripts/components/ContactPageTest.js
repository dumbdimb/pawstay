jest.unmock('../../../src/scripts/components/ContactPage');

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import ContactPage from '../../../src/scripts/components/ContactPage';
import GoogleMailApiClient from '../../../src/scripts/email/GoogleMailApiClient';

describe('ContactPage', () => {
    let tree;

    beforeEach(() => {
        GoogleMailApiClient.sendMessage = jest.fn();
        tree = shallow(<ContactPage/>);
    });

    it('renders correctly', () => {
        expect(renderer.create(<ContactPage/>).toJSON()).toMatchSnapshot();
    });

    describe('the form', () => {
        it('changes state when I change the ownerName field', () => {
            const testValue = 'Bob Dole';

            const fakeEvent = {
                target: {
                    value: testValue,
                    name: 'ownerName'
                }
            };

            tree.find('.contact-form__field').at(0).props().onChange(fakeEvent);

            expect(tree.update().state('ownerName')).toEqual(testValue);
        });

        it('changes state when I change the dogName field', () => {
            const testValue = 'Spike';

            const fakeEvent = {
                target: {
                    value: testValue,
                    name: 'dogName'
                }
            };

            tree.find('.contact-form__field').at(1).props().onChange(fakeEvent);

            expect(tree.update().state('dogName')).toEqual(testValue);
        });

        it('changes state when I change the ownerEmail field', () => {
            const testValue = 'bob@dole.com';

            const fakeEvent = {
                target: {
                    value: testValue,
                    name: 'ownerEmail'
                }
            };

            tree.find('.contact-form__field').at(2).props().onChange(fakeEvent);

            expect(tree.update().state('ownerEmail')).toEqual(testValue);
        });

        it('changes state when I change the subject field', () => {
            const testValue = 'My dog needs some love and I can&apos;t give it to him!';

            const fakeEvent = {
                target: {
                    value: testValue,
                    name: 'subject'
                }
            };

            tree.find('.contact-form__field').at(3).props().onChange(fakeEvent);

            expect(tree.update().state('subject')).toEqual(testValue);
        });

        it('changes state when I change the body field', () => {
            const testValue = 'Aaaaaaaaahhhhhhhhhh help me!';

            const fakeEvent = {
                target: {
                    value: testValue,
                    name: 'body'
                }
            };

            tree.find('.contact-form__field--body').props().onChange(fakeEvent);

            expect(tree.update().state('body')).toEqual(testValue);
        });

        describe('the submit button', () => {
            it('sends an e-mail to clarissa@pawstay.dog', () => {
                tree.setState({
                    ownerName: 'Bob Dole',
                    dogName: 'Dog Dole',
                    ownerEmail: 'bob@dole.com',
                    subject: 'Please watch my dog',
                    body: 'I don\'t have any other options'
                });

                tree = tree.update();

                tree.find('.contact-form__submit').simulate('click');

                expect(GoogleMailApiClient.sendMessage).toBeCalledWith('Bob Dole', 'Dog Dole', 'bob@dole.com', 'Please watch my dog', 'I don\'t have any other options');
            });
        });
    });
});