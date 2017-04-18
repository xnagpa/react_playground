import React from 'react';
import { List } from 'semantic-ui-react';
import Link from 'components/elements/Link';

const HeaderList = () => (
  <List horizontal>
    <List.Item>
      <List.Content>
        <Link to='/'>Main</Link>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content>
        <Link to='/about'>About</Link>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content>
        <Link to='/contactus'>Contact us</Link>
      </List.Content>
    </List.Item>
  </List>);

export default HeaderList;
