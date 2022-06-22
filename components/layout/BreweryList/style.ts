import styled from 'styled-components';

// bg-[#FFFEF0] w-full min-h-screen flex flex-col items-center
export const Container = styled.main`
  background-color: #fffef0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardsContainer = styled.div`
  margin: 0px 96px;
  padding: 96px 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
`;
