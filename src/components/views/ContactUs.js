import React from 'react';

import { Header, Container } from 'semantic-ui-react';
import UncontrolledForm from
  'components/widgets/blog/elements/UncontrolledForm';
import ControlledForm from 'components/widgets/blog/elements/ControlledForm';

const ContactUs = () => (
    <Container>
      <Header>Contact us</Header>
      <h2>Uncontrolled Form</h2>
      <UncontrolledForm />
      <h2>Controlled Form</h2>
      <ControlledForm />
    </Container>
);

export default ContactUs;
