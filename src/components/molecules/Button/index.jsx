import React from 'react';
import { FaArrowCircleRight, Buton, Span } from './styles';

export const Button = () => {
  return (
    <Buton className="btn">
      <Span>leer más</Span>
      <FaArrowCircleRight />
    </Buton>
  );
};
