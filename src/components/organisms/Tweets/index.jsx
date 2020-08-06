import React from 'react';
import Titles from '../../molecules/Titles';
import Text from '../../molecules/Text';

import { Section } from './styles';

export const Tweets = () => {
  return (
    <Section>
      <Titles first="últimos" second="tweets" />
      <Text
        title="5:13 PM Sep 7 desde TweetDeck"
        text="RT 1stwebdesigner: Mira mi último diseño http://bit.ly/asdfg"
      />
      <hr />
      <Text
        title="5:13 PM Sep 7 desde TweetDeck"
        text="RT 1stwebdesigner: Mira mi último diseño http://bit.ly/asdfg"
      />
    </Section>
  );
};
