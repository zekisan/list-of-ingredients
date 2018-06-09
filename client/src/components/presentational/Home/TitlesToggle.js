import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from 'semantic-ui-react';

const TitlesToggle = ({ drinks, drink, getDrink }) =>
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

TitlesToggle.propTypes = {
  drinks: PropTypes.array,
  drink: PropTypes.object,
  getDrink: PropTypes.func,
};

export default TitlesToggle;
