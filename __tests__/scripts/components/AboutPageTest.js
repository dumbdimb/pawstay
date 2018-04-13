jest.unmock('../../../src/scripts/components/AboutPage');

import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import AboutPage from '../../../src/scripts/components/AboutPage';

describe('AboutPage', () => {
    it('renders coorectly', () => {
        expect(renderer.create(<AboutPage/>).toJSON()).toMatchSnapshot();
    });
});