import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { Container, Header, Segment, Button, Dimmer, Loader, Divider } from 'semantic-ui-react';

import HomeHeader from './HomeHeader';

const DrinksGroup = ({ drinks, drink, getDrink }) =>
  <span>
    {
      drinks && drinks.length
        ? <Button.Group color='teal' fluid widths={drinks.length}>
          {Object.keys(drinks).map((key) => {
            return <Button active={drink && drink.id === drinks[key].id} key={key} onClick={() => getDrink(drinks[key].id)}>
              {drinks[key].title}
            </Button>
          })}
        </Button.Group>
        : <Container textAlign='center'>No drinks found.</Container>
    }
  </span>;

DrinksGroup.propTypes = {
  drinks: PropTypes.array,
  drink: PropTypes.object,
  getDrink: PropTypes.func,
};

const DrinkRecipe = ({ drink }) => <span>
  {drink &&
    <Container>
      <Header as='h2'>{drink.title}</Header>
      {drink.description && <p>{drink.description}</p>}
      {drink.ingredients &&
        <Segment.Group>
          {drink.ingredients.map((ingredient, i) => <Segment key={i}>{ingredient.description}</Segment>)}
        </Segment.Group>
      }
      {drink.steps && <p>{drink.steps}</p>}
      {drink.source && <Button basic size='tiny' color='teal' href={drink.source}>Source</Button>}
    </Container>
  }
</span>;

DrinkRecipe.propTypes = {
  drink: PropTypes.object,
};

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
        <HomeHeader />
        <Divider hidden section />
        <DrinksGroup drinks={drinks} drink={drink} getDrink={this.getDrink} />
        <Divider section />
        <DrinkRecipe drink={drink}/>
      </Container>
      : <Container text>
        <Dimmer active inverted>
          <Loader content='loading' />
        </Dimmer>
      </Container>
  }
}

export default Home;
