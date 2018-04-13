jest.unmock('../../../src/scripts/components/Toolbar');

import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import Toolbar from '../../../src/scripts/components/Toolbar';

describe('Toolbar', () => {
    let tree;
    let changePage = jest.fn();

    beforeEach(() => {
        tree = shallow(<Toolbar changePage={changePage}/>);
    });

    it('renders correctly', () => {
        expect(renderer.create(<Toolbar changePage={changePage}/>).toJSON()).toMatchSnapshot();
    });

    describe('change page', () => {
        it('changes to home when logo is clicked on', () => {
            tree.find('.toolbar__logo').simulate('click');

            expect(changePage).toBeCalledWith('home');
        });
        
        it('changes to about page when about us is clicked on', () => {
            tree.find('.toolbar__menu-item').at(0).simulate('click');

            expect(changePage).toBeCalledWith('about');
        });
        
        it('changes to services page when our service is clicked on', () => {
            tree.find('.toolbar__menu-item').at(1).simulate('click');

            expect(changePage).toBeCalledWith('services');
        });
        
        it('changes to contact page when contact us is clicked on', () => {
            tree.find('.toolbar__menu-item').at(2).simulate('click');

            expect(changePage).toBeCalledWith('contact');
        });
    });
});