import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

const HomeHeader = () => <Header as='h2' icon textAlign='center' color='teal'>
  <Icon name='paper plane outline' circular />
  <Header.Content>
    List of Ingredients
  </Header.Content>
</Header>;

export default HomeHeader;