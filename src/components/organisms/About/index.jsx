import React from 'react';
import Titles from '../../molecules/Titles';
import { Button } from '../../molecules/Button';

import { Section } from './styles';

export const About = () => {
  return (
    <div>
      <Section>
        <Titles first="quien" second="soy" />
        <p>
          Etiam lectus nulla, vestibulum vel luctus eu, ultrice Sit amet arcu.
          In a sem a nibh fringilia blandit. Ut u Metus turpis ultricies.
        </p>
        <Button />
      </Section>
    </div>
  );
};
