import React from 'react';
import Titles from '../../molecules/Titles';
import Text from '../../molecules/Text';

import { Section, Hr } from './styles';

export const Feedback = () => {
  return (
    <Section>
      <Titles first="feedback" second="de clientes" />
      <Text
        title="Sr. Lorem Ipsum"
        text="Lorem ipsum dolor sit amet, muy buen trabajo!!"
      />
      <Hr />
      <Text
        title="Sr. Lorem Ipsum"
        text="Lorem ipsum dolor sit amet, if you want you have"
      />
    </Section>
  );
};
