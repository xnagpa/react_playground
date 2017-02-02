import React, { PropTypes } from 'react';
import { Segment, Header, Container, Button } from 'semantic-ui-react';
import Link from 'components/elements/Link';
import history from 'helpers/history';

const MainLayout = ({ children }) => (
  <Container>
    <Logo />
      <GoBackButton />
      {children}
    <Footer />
  </Container>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

const GoBackButton = () => (
  <Button onClick={ () => history.goBack()}> Назад </Button>
);

const Logo = () => (
  <Segment>
    <Header>
      <Link to='/'>2ch11 filial header</Link>
      <Link to='/about'>About</Link>
    </Header>
  </Segment>
);

const Footer = () => (
  <Segment>
    Awesome footer
  </Segment>
);

export default MainLayout;
