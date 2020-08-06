import React from 'react';
import { FaCheckCircle } from './styles';

export const List = () => {
  return (
    <div>
      <ul>
        <li>
          <FaCheckCircle />
          Lorem Ipsum servicio destacado
        </li>
        <li>
          <FaCheckCircle />
          Otro servicio que debemos destacar
        </li>
        <li>
          <FaCheckCircle />
          Aquí va otro servicio
        </li>
      </ul>
    </div>
  );
};
