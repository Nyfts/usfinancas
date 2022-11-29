import React from "react";

import { Container, Button } from "./styles";

function ButtonInput({ onClick, title }) {
  return (
    <Container>
      <Button onClick={onClick}>{title || 'Confirmar'}</Button>
    </Container>
  );
}

export default ButtonInput;
