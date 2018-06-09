import React from 'react';

import { storiesOf } from '@storybook/react';
import TitlesToggle from '../../components/presentational/Home/TitlesToggle';

import drinks from '../../mocks/drinks'

storiesOf('TitlesToggle', module).add('to Storybook', () => <TitlesToggle drinks={drinks}/>);