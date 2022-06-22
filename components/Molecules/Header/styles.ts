import styled from 'styled-components';

export const Container = styled.main`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div:first-of-type {
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
      margin-left: 10px;
      > span {
        margin-left: 10px;
      }
    }

    @media screen and (min-width: 769px) {
      margin-left: 20px;
      > span {
        margin-left: 20px;
      }
    }
  }

  span {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    span {
      font-size: 18px;
      line-height: 150%;
      margin-right: 20px;
    }
  }

  @media screen and (min-width: 769px) {
    span {
      font-size: 30px;
      line-height: 150%;
      margin-right: 40px;
    }
  }
`;
