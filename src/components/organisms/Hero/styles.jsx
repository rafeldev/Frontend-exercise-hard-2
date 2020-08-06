import styled, { css } from 'styled-components';

import myFontUrl from '../../../LatoWoff/lato-bold-webfont.woff';

export const fontFaces = css`
  font-face {
    font-family: 'Lato';
    src: url(${myFontUrl});
    font-weight: 900;
    font-style: normal;
  }
`;

export const Section = styled.section`
  width: 50%;
`;

export const Div = styled.div`
  text-align: center;
`;

export const Img = styled.img`
  margin-bottom: -24px;
`;

export const Span = styled.span`
  color: #66656b;
`;

export const H3 = styled.h3`
  color: #eb1a4a;
  font-size: 34px;
`;
