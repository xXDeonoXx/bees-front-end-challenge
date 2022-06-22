import { Field } from 'formik';
import React from 'react';
import { StyledCheckbox } from './styles';

interface CheckboxProps {
  name: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ name }) => {
  return <Field name={name} as={StyledCheckbox} />;
};

export default Checkbox;
