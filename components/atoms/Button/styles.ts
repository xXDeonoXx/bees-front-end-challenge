import styled from 'styled-components';

interface BtnProps {
  disabled?: boolean;
}

export const Btn = styled.button<BtnProps>`
  width: 'auto';
  height: 40px;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.disabledColor : theme.colors.secondary};
  border: none;
  border-radius: 4px;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;

  /* Button font styles */
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  cursor: ${({ disabled }) => (disabled ? '' : 'pointer')};
`;
