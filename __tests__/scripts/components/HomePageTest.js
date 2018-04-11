jest.unmock('../../../src/scripts/components/HomePage');

import React from 'react';
import renderer from 'react-test-renderer';

import HomePage from '../../../src/scripts/components/HomePage';

describe('HomePage', () => {
    it('renders correctly', () => {
        expect(renderer.create(<HomePage/>).toJSON()).toMatchSnapshot();
    });
});