jest.unmock('../../../src/scripts/components/ServicePage');

import React from 'react';
import renderer from 'react-test-renderer';

import ServicePage from '../../../src/scripts/components/ServicePage';

describe('ServicePage', () => {
    it('renders correctly', () => {
        expect(renderer.create(<ServicePage/>).toJSON()).toMatchSnapshot();
    });
});