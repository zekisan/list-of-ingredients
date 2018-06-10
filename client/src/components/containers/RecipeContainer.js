import React, { PureComponent } from 'react';
import '../../App.css';
import { Dimmer, Loader, Divider } from 'semantic-ui-react';

import TitlesToggle from '../../components/presentational/Home/TitlesToggle';
import Recipe from '../../components/presentational/Home/Recipe';

class Home extends PureComponent {
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
    return <span>
      {
        drinks
          ? <span>
            <TitlesToggle drinks={drinks} drink={drink} getDrink={this.getDrink} />
            <Divider section />
            <Recipe drink={drink} />
          </span>
          :
          <Dimmer active inverted>
            <Loader content='loading' />
          </Dimmer>
      }
    </span>
  }
}

export default Home;
