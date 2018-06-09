import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';
import drinks from './mocks/drinks'

describe('testing Home', () => {
    beforeEach(() => {
        fetch.resetMocks()
    })

    it('renders without crashing', () => {
        fetch.mockResponseOnce(JSON.stringify({ drinks: drinks }))

        shallow(<Home />);
    });
})