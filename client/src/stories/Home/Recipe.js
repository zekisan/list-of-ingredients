import React from 'react';

import { storiesOf } from '@storybook/react';
import Recipe from '../../components/presentational/Home/Recipe';

import drinks from '../../mocks/drinks'

storiesOf('Recipe', module).add('to Storybook', () => <Recipe drink={drinks[0]}/>);