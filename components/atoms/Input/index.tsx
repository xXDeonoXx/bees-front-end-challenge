import { Field, useField } from 'formik';
import React from 'react';
import { StyledInput, ErrorText, Container } from './styles';

interface InputProps {
  name: string;
}

const Input: React.FC<InputProps> = ({ name }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <Container>
      <Field placeholder='Full name' name={name} as={StyledInput} />
      <ErrorText>{meta?.error}</ErrorText>
    </Container>
  );
};

export default Input;
