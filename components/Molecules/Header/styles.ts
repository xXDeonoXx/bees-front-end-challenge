import styled from 'styled-components';

export const Container = styled.main`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    margin-left: 20px;
    align-items: center;
  }

  span {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 150%;
  }
`;
