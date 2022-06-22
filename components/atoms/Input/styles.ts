import styled from 'styled-components';

// className='bg-white border border-gray-300 rounded h-11 w-full px-3'

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const StyledInput = styled.input.attrs(() => ({ type: 'text' }))`
  background-color: white;
  border: 1px solid #d4d4d8;
  border-radius: 4px;
  height: 43px;

  width: 100%;
  padding: 0px 12px;
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  padding: 0;
  margin: 0;
`;
