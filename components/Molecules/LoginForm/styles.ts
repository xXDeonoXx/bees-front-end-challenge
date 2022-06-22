import { Form as FormikForm } from 'formik';
import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (max-width: 768px) {
    margin-bottom: 100px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 20px;
  padding: 0;
  margin: 0;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const InputWrapper = styled.div`
  width: 100%;
  padding: 16px 0;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 14px;
    line-height: 20px;
    padding: 0;
    margin: 0;
  }

  padding-bottom: 16px;
`;
