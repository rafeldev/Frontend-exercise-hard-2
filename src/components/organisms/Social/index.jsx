import React from 'react';
import Titles from '../../molecules/Titles';
import SocialItem from '../../molecules/Social';
import { social } from '../../../social.json';

import { Section } from './styles';

export const Social = () => {
  return (
    <Section className="info-item-three">
      <Titles first="también" second="estoy en" />
      {social.map(socialmedia => (
        <SocialItem key={socialmedia.id} {...socialmedia} />
      ))}
    </Section>
  );
};
