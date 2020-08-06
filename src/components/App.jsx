import React from 'react';

import { Header } from './organisms/Header';
import { Hero } from './organisms/Hero';
import { Footer } from './organisms/Footer';
import Images from './container/Images';

import { TwoColumns } from './container/TwoColumns';
import { ThreeColums } from './container/ThreeColums';

import { GlobalStyle } from '../GlobalStyles';
import { Main } from './styles';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Main>
        <Header />
        <Hero />
        <Images />
        <TwoColumns />
        <ThreeColums />
        <Footer />
      </Main>
    </React.Fragment>
  );
}

export default App;
