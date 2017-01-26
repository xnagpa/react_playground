import React, { PropTypes } from 'react';
import { Segment, Header, Container } from 'semantic-ui-react';

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
    <Header>2ch filial header</Header>
  </Segment>
);

const Footer = () => (
  <Segment>
    Awesome footer
  </Segment>
);

export default MainLayout;
