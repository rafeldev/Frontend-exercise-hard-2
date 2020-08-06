import styled from 'styled-components';
import { FaArrowCircleRight as Icon } from 'react-icons/fa';

export const Buton = styled.button`
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  background: linear-gradient(180deg, #fff, #dcdcdc);
  border: none;
  border-radius: 8px;
  box-shadow: 0px 2px 4px #66656b;
`;

export const Span = styled.span`
  display: inline;
  font-family: 'Lato', sans-serif;
  font-weight: 900;
  font-size: 16px;
  color: #0d0d0d;
`;

export const FaArrowCircleRight = styled(Icon)`
  color: #eb1a4a;
  margin: 0 8px;
`;
