import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import HomeContainer from '../HomeContainer';
import drinks from '../../../mocks/drinks'

describe('testing HomeContainer', () => {
    beforeEach(() => {
        fetch.resetMocks()
        fetch.mockResponseOnce(JSON.stringify({ drinks: drinks }))
    })

    it('renders without crashing', () => {
        shallow(<HomeContainer />);
    });

    it('tries snapshots', () => {
        const tree = renderer
            .create(<HomeContainer />)
            .toJSON();
        
        expect(tree).toMatchSnapshot();
    });
})