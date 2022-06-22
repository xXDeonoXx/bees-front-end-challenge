import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  outline-style: solid;
  outline-width: 0px;
  &:hover {
    outline-width: 2px;
    outline-color: #5d5fef;
  }
  position: relative;
  border: 1px solid black;
  background-color: white;
  width: 382px;
  height: 282px;
  border-radius: 4px;
  padding: 24px 28px;
`;

export const DeleteButtonWrapper = styled.div`
  width: 20px;
  position: absolute;
  right: 8px;
  top: 8px;
  cursor: pointer;
`;

export const BreweryTitle = styled.span`
  font-weight: 700;
  font-size: 20px;
  color: #27272a;
  margin-bottom: 20px;
`;

export const BreweryAddress = styled.span`
  color: #3f3f46;
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 24px;
`;

export const ChipsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 1.75rem;
`;
