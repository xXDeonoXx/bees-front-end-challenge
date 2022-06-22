import styled from 'styled-components';

interface ContainerProps {
  disabled?: boolean;
}

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 99px;
  height: 32px;
  min-width: 130px;
  display: flex;
  align-items: center;
  padding: 4px 8px;

  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  input {
    width: 80px;
    height: 20px;
    border-radius: 4px;
  }
`;

export const IconContainer = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;
