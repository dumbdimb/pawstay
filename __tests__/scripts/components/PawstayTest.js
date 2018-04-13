jest.unmock('../../../src/scripts/components/Pawstay');

import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import Pawstay from '../../../src/scripts/components/Pawstay';

describe('Pawstay', () => {
    let tree;

    beforeEach(() => {
        tree = shallow(<Pawstay/>);
    });

    it('renders coorectly', () => {
        expect(renderer.create(<Pawstay/>).toJSON()).toMatchSnapshot();
    });

    describe('changePage', () => {
        it('changes currentPage to the parameter with which it is called', () => {
            tree.find('.root__toolbar').props().changePage('services');

            expect(tree.update().state('currentPage')).toEqual('services');
        });
    });
});