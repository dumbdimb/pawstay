jest.unmock('../../../src/scripts/components/Toolbar');

import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import Toolbar from '../../../src/scripts/components/Toolbar';

describe('Toolbar', () => {
    let tree;

    beforeEach(() => {
        tree = shallow(<Toolbar/>);
    });

    it('renders correctly', () => {
        expect(renderer.create(<Toolbar/>).toJSON()).toMatchSnapshot();
    });
});