import React from 'react';
import Img01 from '../../img/01.jpg';
import Img02 from '../../img/022.jpg';
import Img03 from '../../img/Logo.png';

import { Section, Div, Img1, Img2, FaChevronLeft } from './ImageStyles';
import { FaChevronRight } from './rightStyles';

const Images = () => {
  return (
    <Section className="images">
      <Div className="images__container">
        <FaChevronLeft />
        <Img2 src={Img01} alt="Imagen 01" />
        <Img1 src={Img03} alt="Imagen 02" />
        <Img2 src={Img02} alt="Imagen 03" />
        <FaChevronRight />
      </Div>
    </Section>
  );
};

export default Images;
