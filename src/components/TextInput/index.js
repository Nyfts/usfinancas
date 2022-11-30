import React from 'react';

import { Container, Input, Title } from './styles';

function TextInput({name = "", onChange = () => {}, title = '', type = "text"}) {
  return (
    <Container>
      <Title>{title}</Title>
      <Input name={name} onChange={onChange} type={type} />
    </Container>
  );
}

export default TextInput;