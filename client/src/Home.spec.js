import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

const drinks = [
    {
        "id": 1,
        "title": "Two-Minute Breakfast Boost",
        "description": "Whizz up a low-fat breakfast smoothie in no time. Use banana with other soft fruit, plus honey for a little sweetness and oats for slow-release fuel.",
        "steps": "Put all the ingredients in a blender and whizz for 1 min until smooth. Pour the mixture into two glasses to serve.",
        "source": "https://www.bbcgoodfood.com/recipes/two-minute-breakfast-smoothie",
        "created_at": "2018-06-09T00:22:22.524Z",
        "updated_at": "2018-06-09T00:22:22.524Z"
    },
    {
        "id": 2,
        "title": "Kale And Hearty Smoothie",
        "description": "Give yourself a dose of vitamin C in the morning with this vegan green smoothie. Along with kale and avocado, there's a hit of zesty lime and pineapple.",
        "steps": "Put all of the ingredients into a bullet or smoothie maker, add a large splash of water and blitz. Add more water until you have the desired consistency.",
        "source": "https://www.bbcgoodfood.com/recipes/kale-smoothie",
        "created_at": "2018-06-09T00:22:22.993Z",
        "updated_at": "2018-06-09T00:22:22.993Z"
    }
]

describe('testing Home', () => {
    beforeEach(() => {
        fetch.resetMocks()
    })

    it('renders without crashing', () => {
        fetch.mockResponseOnce(JSON.stringify({ ...drinks }))

        shallow(<Home />);
    });
})