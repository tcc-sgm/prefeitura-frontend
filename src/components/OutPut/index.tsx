import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
}

const OutPut: React.FC<InputProps> = ({label, value,  ...rest}) => {

  const outPutRef = useRef<HTMLInputElement>(null);

  return (
    <Container >
      <label>{label}</label>
      <output
        ref={outPutRef} { ...rest } >{value}</output>
    </Container>
  );
};

export default OutPut;
