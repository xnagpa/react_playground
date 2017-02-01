import React, { PropTypes } from 'react';
import { Segment, Header, Container, Button } from 'semantic-ui-react';
import Link from 'components/elements/Link';

const MainLayout = ({ children }) => (
  <Container>
    <Logo />
    {children}
    <Footer />
  </Container>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

const Logo = () => (
  <Segment>
    <Header>
      <Link to='/'>2ch11 filial header</Link>
    </Header>
  </Segment>
);

const Footer = () => (
  <Segment>
    Awesome footer
  </Segment>
);
