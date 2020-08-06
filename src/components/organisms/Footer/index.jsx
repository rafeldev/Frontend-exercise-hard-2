import React from 'react';
import { Menu } from '../../molecules/Menu';

import { Foter, Span } from './styles';

export const Footer = () => {
  return (
    <Foter>
      <Menu />
      <p>
        Copyright 2010 - <Span> Gonzalo Martín Elola</Span> - Todos los derechos
        reservados
      </p>
    </Foter>
  );
};
