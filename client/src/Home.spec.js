import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Home from './Home';
import drinks from './mocks/drinks'

describe('testing Home', () => {
    beforeEach(() => {
        fetch.resetMocks()
        fetch.mockResponseOnce(JSON.stringify({ drinks: drinks }))
    })

    it('renders without crashing', () => {
        shallow(<Home />);
    });

    it('tries snapshots', () => {
        const tree = renderer
            .create(<Home />)
            .toJSON();
        
        expect(tree).toMatchSnapshot();
    });
})