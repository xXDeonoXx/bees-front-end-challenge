import styled from 'styled-components';

// bg-primary w-screen h-screen flex justify-center items-center
export const Container = styled.main`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoContainer = styled.div`
  position: absolute;
  left: 32px;
  bottom: 16px;
`;
