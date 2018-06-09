import React, { Component } from 'react';
import '../../App.css';
import { Container, Dimmer, Loader, Divider } from 'semantic-ui-react';

import Header from '../../components/presentational/Home/Header';
import TitlesToggle from '../../components/presentational/Home/TitlesToggle';
import Recipe from '../../components/presentational/Home/Recipe';

class Home extends Component {
  constructor() {
    super();

    this.state = {}
    this.getDrinks = this.getDrinks.bind(this);
    this.getDrink = this.getDrink.bind(this);
  }

  componentDidMount() {
    this.getDrinks();
  }

  fetch(endpoint) {
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error));
  }

  getDrinks() {
    this.fetch('/api/drinks')
      .then(drinks => {
        if (drinks.length) {
          this.setState({ drinks: drinks })
          this.getDrink(drinks[0].id)
        } else {
          this.setState({ drinks: [] })
        }
      })
  }

  getDrink(id) {
    this.fetch(`/api/drinks/${id}`)
      .then(drink => this.setState({ drink: drink }))
  }

  render() {
    let { drinks, drink } = this.state;
    return drinks
      ? <Container text>
        <Header />
        <Divider hidden section />
        <TitlesToggle drinks={drinks} drink={drink} getDrink={this.getDrink} />
        <Divider section />
        <Recipe drink={drink}/>
      </Container>
      : <Container text>
        <Dimmer active inverted>
          <Loader content='loadingsss' />
        </Dimmer>
      </Container>
  }
}

export default Home;
