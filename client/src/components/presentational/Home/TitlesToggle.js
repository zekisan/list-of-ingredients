import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from 'semantic-ui-react';

const TitlesToggle = ({ drinks, drink, getDrink }) =>
  <span>
    {
      drinks && drinks.length
        ? <Button.Group color='teal' fluid widths={drinks.length}>
          {Object.keys(drinks).map((key) => {
            return <TitleButton
              active={drink && drink.id === drinks[key].id}
              key={key}
              drinkId={drinks[key].id}
              getDrink={getDrink}
              title={drinks[key].title}
            />
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

class TitleButton extends PureComponent {
  constructor(props) {
    super(props)

    this.getDrink = this.getDrink.bind(this);
  }

  getDrink() {
    this.props.getDrink(this.props.drinkId);
  }

  render() {
    const { active, title } = this.props;
    return <Button active={active} onClick={this.getDrink}>
      {title}
    </Button>
  }
}

TitleButton.propTypes = {
  active: PropTypes.bool,
  drinkId: PropTypes.number,
  title: PropTypes.string,
  getDrink: PropTypes.func,
}
