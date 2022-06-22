import styled from 'styled-components';

export const Container = styled.main`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoContainer = styled.div`
  pointer-events: none;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
    left: 0px;
    bottom: 0px;
  }
  position: absolute;
  left: 32px;
  bottom: 16px;
`;
