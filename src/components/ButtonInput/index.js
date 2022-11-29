import React from "react";

import { Container, Button } from "./styles";

function ButtonInput({ onClick, title, primary }) {
  return (
    <Container>
      <Button primary={primary || "#3C493F"} onClick={onClick}>{title || 'Confirmar'}</Button>
    </Container>
  );
}

export default ButtonInput;
