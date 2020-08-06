import styled from 'styled-components';

import { FaChevronLeft as Icon2 } from 'react-icons/fa';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 34px;
  max-width: 100%;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  border: 8px solid #0d0d0d;
  box-shadow: 0px 4px 2px #0d0d0d;
`;

export const Img1 = styled.img`
  max-width: 34%;
  margin: 0;
  padding: 0;
`;

export const Img2 = styled.img`
  max-width: 24%;
`;

export const FaChevronLeft = styled(Icon2)`
  width: 40px;
  height: 40px;
  color: #eb1a4a;
  margin: 16px;
`;
