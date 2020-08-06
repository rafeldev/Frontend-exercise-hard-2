import React from 'react';
import Logo from '../../../img/Logo.png';

import { Section, Div, H3, Span, Img } from './styles';

export const Hero = () => {
  return (
    <Section className="hero">
      <Div className="hero__container">
        <Img src={Logo} alt="Logo" />
        <H3>Mira mis últimos diseños y projectos.</H3>
        <H3>
          Oh, por cierto, <Span>¡Bienvenido!</Span>
        </H3>
      </Div>
    </Section>
  );
};
