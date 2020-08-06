import React from 'react';
import { Tweets } from '../organisms/Tweets';
import { Feedback } from '../organisms/Feedback';
import { Social } from '../organisms/Social';

import { Div } from './styles';

export const ThreeColums = () => {
  return (
    <Div>
      <Tweets />
      <Feedback />
      <Social />
    </Div>
  );
};
