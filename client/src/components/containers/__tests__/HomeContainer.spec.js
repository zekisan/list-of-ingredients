import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import HomeContainer from '../HomeContainer';
import RecipeContainer from '../RecipeContainer';
import Header from '../../presentational/Home/Header';
import drinks from '../../../mocks/drinks'

describe('HomeContainer', () => {
    let mountedHomeContainer;
    const homeContainer = () => {
        if(!mountedHomeContainer) {
            mountedHomeContainer = mount(<HomeContainer />);
        }
        return mountedHomeContainer;    
    }

    beforeEach(() => {
        fetch.resetMocks()
        fetch.mockResponseOnce(JSON.stringify({ drinks: drinks }))

        mountedHomeContainer = undefined;
    })

    it('always renders a `Header`', () => {
        expect(homeContainer().find(Header).length).toBe(1);
    });

    it('always renders a `RecipeContainer`', () => {
        expect(homeContainer().find(RecipeContainer).length).toBe(1);
    });

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