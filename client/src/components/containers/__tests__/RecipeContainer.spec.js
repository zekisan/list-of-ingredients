import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Dimmer, Loader, Divider } from 'semantic-ui-react';

import RecipeContainer from '../RecipeContainer';
import TitlesToggle from '../../presentational/Home/TitlesToggle';
import Recipe from '../../presentational/Home/Recipe';
import drinks from '../../../mocks/drinks'

describe('RecipeContainer', () => {
    beforeEach(() => {
        fetch.resetMocks();
    })

    describe('when state `drinks` receives data', () => {
        let wrapper;

        beforeEach(() => {
            fetch.mockResponse(JSON.stringify({ drinks: drinks }));
            wrapper = mount(<RecipeContainer />);
            wrapper.setState({ drinks: drinks })
        });

        it('always renders a span', () => {
            const spans = wrapper.find('span');
            expect(spans.length).toBeGreaterThan(0);
        });

        it('always renders a TitlesToggle', () => {
            expect(wrapper.find(TitlesToggle).length).toBe(1)
        });

        it('always renders a Divider', () => {
            expect(wrapper.find(Divider).length).toBe(1);
        });

        it('always renders a Recipe', () => {
            expect(wrapper.find(Recipe).length).toBe(1);
        });

        it('never renders a Dimmer', () => {
            expect(wrapper.find(Dimmer).length).toBe(0);
        });

        it('never renders a Loader', () => {
            expect(wrapper.find(Loader).length).toBe(0);
        });
    });

    describe('when state `drinks` receives undefined', () => {
        let wrapper;

        beforeEach(() => {
            fetch.mockResponse(JSON.stringify({ drinks: undefined }))
            wrapper = shallow(<RecipeContainer />);
        });

        it('always renders a span', () => {
            const spans = wrapper.find('span');
            expect(spans.length).toBe(1);
        });

        it('never renders a TitlesToggle', () => {
            expect(wrapper.find(TitlesToggle).length).toBe(0)
        });

        it('never renders a Divider', () => {
            expect(wrapper.find(Divider).length).toBe(0);
        });

        it('never renders a Recipe', () => {
            expect(wrapper.find(Recipe).length).toBe(0);
        });

        it('always renders a Dimmer', () => {
            expect(wrapper.find(Dimmer).length).toBe(1);
        });

        it('always renders a Loader', () => {
            expect(wrapper.find(Loader).length).toBe(1);
        });
    });

    describe('snapshot', () => {
        beforeEach(() => {
            fetch.mockResponse(JSON.stringify({ drinks: drinks }))
        });

        it('tries snapshots', () => {
            const tree = renderer
                .create(<RecipeContainer />)
                .toJSON();
            
            expect(tree).toMatchSnapshot();
        });
    });
});