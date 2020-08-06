import React from 'react';
import Titles from '../../molecules/Titles';
import { List } from '../../molecules/List';

import { Section } from './styles';

export const Services = () => {
  return (
    <Section>
      <Titles first="servicios" second="destacados" />
      <List />
    </Section>
  );
};
