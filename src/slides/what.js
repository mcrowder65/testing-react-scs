import React from "react";
import { Container } from "../reusable/container";
import { Text } from "../reusable/text";
import { Li } from "../reusable/li";
import { Ul } from "../reusable/ul";

const What = () => {
  return (
    <Container alignItems="center">
      <Text align="center">What is React Testing Library?</Text>
      <div>
        <Ul>
          <Li>Solution for testing React components</Li>
          <Li>Can and should be used anywhere Enzyme is</Li>
        </Ul>
      </div>
    </Container>
  );
};

export default What;
