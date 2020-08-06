import React from 'react';
import { About } from '../organisms/About';
import { Services } from '../organisms/Serv';

import { Div } from './styles';

export const TwoColumns = () => {
  return (
    <Div>
      <About />
      <Services />
    </Div>
  );
};
