import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Recipe from '../Recipe';

describe('Recipe', () => {
    let props;
    let mountedRecipe;
    const recipe = () => {
        if(!mountedRecipe) {
            mountedRecipe = mount(<Recipe { ...props } />);
        }
        return mountedRecipe;        
    }
    
    beforeEach(() => {
        props = { drink: undefined }
        mountedRecipe = undefined;
    });

    it('always renders a span', () => {
        const spans = recipe().find('span');
        expect(spans.length).toBeGreaterThan(0);
    });

    describe('snapshot', () => {
        it('tries snapshots', () => {
            const tree = renderer
                .create(<Recipe />)
                .toJSON();
            
            expect(tree).toMatchSnapshot();
        });
    });
});