import React from 'react';
import '../../App.css';
import { Container, Divider } from 'semantic-ui-react';

import ModalWithAnimation from '../presentational/Home/ModalWithAnimation';
import RecipeContainer from './RecipeContainer';
import Header from '../../components/presentational/Home/Header';

const Home = () => <Container text>
  <Header />
  <Divider hidden section />
  <ModalWithAnimation />
  <Divider section />
  <RecipeContainer />
</Container>;

export default Home;
