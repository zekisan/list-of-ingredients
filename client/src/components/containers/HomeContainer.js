import React from 'react';
import '../../App.css';
import { Container, Divider } from 'semantic-ui-react';

import RecipeContainer from './RecipeContainer';
import Header from '../../components/presentational/Home/Header';

const Home = () => <Container text>
  <Header />
  <Divider hidden section />
  <RecipeContainer />
</Container>;

export default Home;
