import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Segment, Button } from 'semantic-ui-react';

const Recipe = ({ drink }) => <span>
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

Recipe.propTypes = {
  /** the drink data */
  drink: PropTypes.object,
};

export default Recipe;